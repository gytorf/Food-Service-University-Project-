const DB_NAME = "patelnyaDB";
const DB_VERSION = 1;

const STORE_PRODUCTS = "products";
const STORE_ORDERS = "orders";
const STORE_CURRENT_ORDER = "currentOrder";

let dbInstance = null;

function openDB() {
  if (dbInstance) return Promise.resolve(dbInstance);

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_PRODUCTS)) {
        db.createObjectStore(STORE_PRODUCTS, { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains(STORE_ORDERS)) {
        const ordersStore = db.createObjectStore(STORE_ORDERS, { keyPath: "orderNumber" });
        ordersStore.createIndex("createdAt", "createdAt", { unique: false });
      }

      if (!db.objectStoreNames.contains(STORE_CURRENT_ORDER)) {
        db.createObjectStore(STORE_CURRENT_ORDER, { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

function tx(storeName, mode) {
  return openDB().then((db) => db.transaction(storeName, mode).objectStore(storeName));
}

async function seedProductsIfEmpty(products) {
  const store = await tx(STORE_PRODUCTS, "readonly");
  const countReq = store.count();
  const existingCount = await new Promise((res, rej) => {
    countReq.onsuccess = () => res(countReq.result);
    countReq.onerror = () => rej(countReq.error);
  });

  if (existingCount > 0) return;

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

async function saveCurrentOrder(cartObj) {
  const store = await tx(STORE_CURRENT_ORDER, "readwrite");
  store.put({ id: "active", items: cartObj, updatedAt: new Date().toISOString() });
}

async function getCurrentOrder() {
  const store = await tx(STORE_CURRENT_ORDER, "readonly");
  return new Promise((resolve, reject) => {
    const req = store.get("active");
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function clearCurrentOrder() {
  const store = await tx(STORE_CURRENT_ORDER, "readwrite");
  store.delete("active");
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
  seedProductsIfEmpty,
  getProducts,
  getProduct,
  saveCurrentOrder,
  getCurrentOrder,
  clearCurrentOrder,
  saveOrder,
  getOrders,
  getOrder,
};
