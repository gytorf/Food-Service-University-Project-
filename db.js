const DB_NAME = "patelnyaDB";
// v3: замовлення тепер після оформлення потрапляють у "активні" (готуються),
// і лише після натискання "Готово" в адмінці переносяться в історію.
// Стару "currentOrder" (сирий кошик у БД) прибрано — кошик і так живе в localStorage.
const DB_VERSION = 3;

const STORE_PRODUCTS = "products";
const STORE_ORDERS = "orders";
const STORE_ACTIVE_ORDERS = "activeOrders";

let dbInstance = null;

let openDBPromise = null;

function openDB() {
  if (dbInstance) return Promise.resolve(dbInstance);
  if (openDBPromise) return openDBPromise;

  openDBPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const oldVersion = event.oldVersion;

      if (!db.objectStoreNames.contains(STORE_PRODUCTS)) {
        db.createObjectStore(STORE_PRODUCTS, { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains(STORE_ORDERS)) {
        const ordersStore = db.createObjectStore(STORE_ORDERS, { keyPath: "orderNumber" });
        ordersStore.createIndex("createdAt", "createdAt", { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_ACTIVE_ORDERS)) {
        const activeStore = db.createObjectStore(STORE_ACTIVE_ORDERS, { keyPath: "orderNumber" });
        activeStore.createIndex("createdAt", "createdAt", { unique: false });
      }

      // Стара версія тримала сирий кошик у сторі "currentOrder" — він більше не потрібен.
      if (oldVersion < 3 && db.objectStoreNames.contains("currentOrder")) {
        db.deleteObjectStore("currentOrder");
      }

      if (oldVersion < 2 && db.objectStoreNames.contains(STORE_PRODUCTS)) {
        // Старий каталог не має полів weightXL/priceXL — очищаємо, щоб
        // syncProducts запише актуальні дані заново.
        event.target.transaction.objectStore(STORE_PRODUCTS).clear();
      }
    };

    // Якщо в іншій вкладці вже відкрито базу зі старою версією, оновлення
    // (upgrade) заблокується і request "зависне" назавжди — саме через це
    // адмін-панель могла вічно показувати "Завантаження...". Тепер стара
    // вкладка сама закриває своє з'єднання, щойно дізнається про новішу версію.
    request.onblocked = () => {
      console.warn(
        "IndexedDB заблоковано: закрийте інші вкладки цього сайту та оновіть сторінку."
      );
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      openDBPromise = null;

      // Звільняємо блокування для інших вкладок, коли з'являється новіша версія бази.
      dbInstance.onversionchange = () => {
        dbInstance.close();
        dbInstance = null;
      };

      resolve(dbInstance);
    };

    request.onerror = (event) => {
      openDBPromise = null;
      reject(event.target.error);
    };
  });

  return openDBPromise;
}

function tx(storeName, mode) {
  return openDB().then((db) => db.transaction(storeName, mode).objectStore(storeName));
}

async function syncProducts(products) {
  // Каталог товарів у БД — лише дзеркало даних з коду (в адмінці товари
  // не редагуються), тому щоразу повністю перезаписуємо стор актуальними
  // даними. Це гарантує, що оновлення складу/алергенів/цін у script.js
  // одразу відображаються в адмін-панелі, а не застрягають у старому кеші.
  const clearStore = await tx(STORE_PRODUCTS, "readwrite");
  await new Promise((res, rej) => {
    const req = clearStore.clear();
    req.onsuccess = () => res();
    req.onerror = () => rej(req.error);
  });

  const writeStore = await tx(STORE_PRODUCTS, "readwrite");
  products.forEach((p) => writeStore.put(p));
}

async function getProducts() {
  const store = await tx(STORE_PRODUCTS, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function getProduct(id) {
  const store = await tx(STORE_PRODUCTS, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get(Number(id));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveActiveOrder(order) {
  const store = await tx(STORE_ACTIVE_ORDERS, "readwrite");
  store.put(order);
}

async function getActiveOrders() {
  const store = await tx(STORE_ACTIVE_ORDERS, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)));
    req.onerror = () => reject(req.error);
  });
}

// Переносить замовлення з "активних" (готуються) в "історію" (готово) —
// саме ця дія відповідає кнопці "Готово" в адмін-панелі.
async function markOrderReady(orderNumber) {
  const activeStore = await tx(STORE_ACTIVE_ORDERS, "readonly");
  const order = await new Promise((resolve, reject) => {
    const req = activeStore.get(orderNumber);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
  if (!order) return null;

  order.status = "Готово";
  order.readyAt = new Date().toISOString();

  const ordersStore = await tx(STORE_ORDERS, "readwrite");
  ordersStore.put(order);

  const deleteStore = await tx(STORE_ACTIVE_ORDERS, "readwrite");
  deleteStore.delete(orderNumber);

  return order;
}

async function saveOrder(order) {
  const store = await tx(STORE_ORDERS, "readwrite");
  store.put(order);
}

async function getOrders() {
  const store = await tx(STORE_ORDERS, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)));
    req.onerror = () => reject(req.error);
  });
}

async function getOrder(orderNumber) {
  const store = await tx(STORE_ORDERS, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get(orderNumber);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}
window.DB = {
  syncProducts,
  getProducts,
  getProduct,
  saveActiveOrder,
  getActiveOrders,
  markOrderReady,
  saveOrder,
  getOrders,
  getOrder,
};
