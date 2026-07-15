const RAW_MENU = [
  { id: 1, cat: "Салати", name: "Цезар з куркою", weight: "220 г", price: 165, weightXL: "350 г", priceXL: 265, img: "img/salad/salad1.webp" },
  { id: 2, cat: "Салати", name: "Грецький салат", weight: "200 г", price: 135, weightXL: "320 г", priceXL: 215, img: "img/salad/salad2.webp" },
  { id: 3, cat: "Салати", name: "Салат з тунцем", weight: "210 г", price: 175, weightXL: "340 г", priceXL: 280, img: "img/salad/salad3.webp" },
  { id: 4, cat: "Салати", name: "Овочевий салат", weight: "200 г", price: 95, weightXL: "320 г", priceXL: 150, img: "img/salad/salad4.webp" },
  { id: 5, cat: "Салати", name: "Салат з креветками", weight: "200 г", price: 195, weightXL: "320 г", priceXL: 310, img: "img/salad/salad5.webp" },
  { id: 6, cat: "Салати", name: "Вітамінний салат", weight: "180 г", price: 105, weightXL: "290 г", priceXL: 170, img: "img/salad/salad6.webp" },
  { id: 7, cat: "Салати", name: "Салат Капрезе", weight: "190 г", price: 145, weightXL: "300 г", priceXL: 230, img: "img/salad/salad7.webp" },
  { id: 8, cat: "Салати", name: "Салат з куркою і ананасом", weight: "210 г", price: 155, weightXL: "340 г", priceXL: 250, img: "img/salad/salad8.webp" },

  { id: 9, cat: "Піца", name: "Маргарита", weight: "450 г", price: 185, weightXL: "700 г", priceXL: 290, img: "img/pizza/pizza1.webp" },
  { id: 10, cat: "Піца", name: "Пепероні", weight: "450 г", price: 215, weightXL: "700 г", priceXL: 335, img: "img/pizza/pizza2.webp" },
  { id: 11, cat: "Піца", name: "Чотири сири", weight: "450 г", price: 225, weightXL: "700 г", priceXL: 350, img: "img/pizza/pizza3.webp" },
  { id: 12, cat: "Піца", name: "Гавайська", weight: "450 г", price: 205, weightXL: "700 г", priceXL: 320, img: "img/pizza/pizza4.webp" },
  { id: 13, cat: "Піца", name: "Барбекю з куркою", weight: "470 г", price: 220, weightXL: "730 г", priceXL: 340, img: "img/pizza/pizza5.webp" },
  { id: 14, cat: "Піца", name: "Вегетаріанська", weight: "450 г", price: 195, weightXL: "700 г", priceXL: 300, img: "img/pizza/pizza6.webp" },
  { id: 15, cat: "Піца", name: "М'ясна", weight: "480 г", price: 235, weightXL: "750 г", priceXL: 365, img: "img/pizza/pizza7.webp" },
  { id: 16, cat: "Піца", name: "Баварезе", weight: "600 г", price: 260, weightXL: "900 г", priceXL: 390, img: "img/pizza/pizza8.webp" },

  { id: 17, cat: "Суші", name: "Філадельфія", weight: "260 г", price: 245, weightXL: "400 г", priceXL: 380, img: "img/sushi/sushi1.webp" },
  { id: 18, cat: "Суші", name: "Каліфорнія", weight: "250 г", price: 225, weightXL: "390 г", priceXL: 350, img: "img/sushi/sushi2.webp" },
  { id: 19, cat: "Суші", name: "Дракон", weight: "270 г", price: 265, weightXL: "420 г", priceXL: 415, img: "img/sushi/sushi3.webp" },
  { id: 20, cat: "Суші", name: "Суші з лососем", weight: "255 г", price: 235, weightXL: "400 г", priceXL: 370, img: "img/sushi/sushi4.webp" },
  { id: 21, cat: "Суші", name: "Унагі маки", weight: "180 г", price: 195, weightXL: "280 г", priceXL: 305, img: "img/sushi/sushi5.webp" },
  { id: 22, cat: "Суші", name: "Сет Токіо", weight: "620 г", price: 450, weightXL: "950 г", priceXL: 690, img: "img/sushi/sushi6.webp" },
  { id: 23, cat: "Суші", name: "Сет Осака", weight: "700 г", price: 520, weightXL: "1050 г", priceXL: 780, img: "img/sushi/sushi7.webp" },
  { id: 24, cat: "Суші", name: "Темпура ролл", weight: "230 г", price: 210, weightXL: "360 г", priceXL: 330, img: "img/sushi/sushi8.webp" },

  { id: 25, cat: "Десерти", name: "Тірамісу", weight: "150 г", price: 125, weightXL: "250 г", priceXL: 210, img: "img/desert/desert1.webp" },
  { id: 26, cat: "Десерти", name: "Чізкейк Нью-Йорк", weight: "150 г", price: 130, weightXL: "250 г", priceXL: 215, img: "img/desert/desert2.webp" },
  { id: 27, cat: "Десерти", name: "Шоколадний фондан", weight: "140 г", price: 135, weightXL: "230 г", priceXL: 220, img: "img/desert/desert3.webp" },
  { id: 28, cat: "Десерти", name: "Медовик", weight: "150 г", price: 110, weightXL: "250 г", priceXL: 185, img: "img/desert/desert4.webp" },
  { id: 29, cat: "Десерти", name: "Панна-котта", weight: "130 г", price: 115, weightXL: "220 г", priceXL: 195, img: "img/desert/desert5.webp" },
  { id: 30, cat: "Десерти", name: "Брауні з морозивом", weight: "160 г", price: 120, weightXL: "260 г", priceXL: 195, img: "img/desert/desert6.webp" },
  { id: 31, cat: "Десерти", name: "Наполеон", weight: "150 г", price: 115, weightXL: "250 г", priceXL: 190, img: "img/desert/desert7.webp" },
  { id: 32, cat: "Десерти", name: "Київський торт", weight: "200 г", price: 110, weightXL: "320 г", priceXL: 175, img: "img/desert/desert8.webp" },

  { id: 33, cat: "Супи", name: "Борщ український", weight: "300 г", price: 95, weightXL: "450 г", priceXL: 145, img: "img/soup/soup1.webp" },
  { id: 34, cat: "Супи", name: "Крем-суп грибний", weight: "300 г", price: 105, weightXL: "450 г", priceXL: 160, img: "img/soup/soup2.webp" },
  { id: 35, cat: "Супи", name: "Том Ям з креветками", weight: "300 г", price: 165, weightXL: "450 г", priceXL: 250, img: "img/soup/soup3.webp" },
  { id: 36, cat: "Супи", name: "Солянка", weight: "300 г", price: 115, weightXL: "450 г", priceXL: 175, img: "img/soup/soup4.webp" },
  { id: 37, cat: "Супи", name: "Суп-пюре гарбузовий", weight: "300 г", price: 95, weightXL: "450 г", priceXL: 145, img: "img/soup/soup5.webp" },
  { id: 38, cat: "Супи", name: "Курячий бульйон з локшиною", weight: "300 г", price: 85, weightXL: "450 г", priceXL: 130, img: "img/soup/soup6.webp" },
  { id: 39, cat: "Супи", name: "Харчо", weight: "300 г", price: 110, weightXL: "450 г", priceXL: 165, img: "img/soup/soup7.webp" },
  { id: 40, cat: "Супи", name: "М'ясна солянка", weight: "300 г", price: 95, weightXL: "450 г", priceXL: 145, img: "img/soup/soup8.webp" },
];

// ---------- Характеристики по кожній конкретній страві ----------
// Реальний склад і алергени під кожну позицію меню окремо (а не один
// узагальнений текст на всю категорію). Калорійність — орієнтовна для
// навчального проєкту, задана діапазоном по категорії й розподілена
// детерміновано по id страви.
const CATEGORY_CAL_RANGE = {
  "Салати": [90, 260],
  "Піца": [650, 980],
  "Суші": [280, 560],
  "Десерти": [320, 480],
  "Супи": [140, 320],
};

const DISH_DETAILS = {
  // Салати
  1: { ingredients: "куряче філе гриль, салат романо, помідори чері, бекон, перепелині яйця, пармезан, сухарики, соус цезар", allergens: "глютен (сухарики), яйця, молоко (пармезан, соус), риба (анчоуси в соусі цезар), гірчиця" },
  2: { ingredients: "помідори, огірки, болгарський перець, червона цибуля, маслини, сир фета, оливкова олія, орегано", allergens: "молоко (фета)" },
  3: { ingredients: "салатний мікс, тунець консервований, яйце варене, помідори чері, огірок, червона цибуля, лимонна заправка", allergens: "риба (тунець), яйця" },
  4: { ingredients: "огірки, помідори, болгарський перець, редис, кріп, петрушка, оливкова олія, лимонний сік", allergens: "без основних алергенів" },
  5: { ingredients: "креветки тигрові, авокадо, салатний мікс, помідори чері, соус на основі йогурту, кунжут", allergens: "ракоподібні (креветки), молоко (соус), кунжут" },
  6: { ingredients: "білокачанна капуста, морква, яблуко, зелень, насіння соняшника, оливкова олія", allergens: "може містити сліди горіхів (насіння)" },
  7: { ingredients: "моцарела, помідори, свіжий базилік, оливкова олія extra virgin, бальзамічний крем", allergens: "молоко (моцарела)" },
  8: { ingredients: "куряче філе гриль, ананас, кукурудза, салатний мікс, твердий сир, соус на основі майонезу", allergens: "молоко (сир, соус), яйця (майонез)" },

  // Піца
  9: { ingredients: "тісто пшеничне, томатний соус, сир моцарела, свіжий базилік, оливкова олія", allergens: "глютен, молоко" },
  10: { ingredients: "тісто пшеничне, томатний соус, сир моцарела, ковбаски пепероні, орегано", allergens: "глютен, молоко" },
  11: { ingredients: "тісто пшеничне, сир моцарела, горгонзола, пармезан, сир чеддер, вершки", allergens: "глютен, молоко (значний вміст лактози)" },
  12: { ingredients: "тісто пшеничне, томатний соус, сир моцарела, шинка, ананас консервований", allergens: "глютен, молоко" },
  13: { ingredients: "тісто пшеничне, соус барбекю, куряче філе гриль, червона цибуля, сир моцарела", allergens: "глютен, молоко, гірчиця (соус барбекю)" },
  14: { ingredients: "тісто пшеничне, томатний соус, болгарський перець, печериці, цибуля, маслини, кукурудза, сир моцарела", allergens: "глютен, молоко" },
  15: { ingredients: "тісто пшеничне, томатний соус, яловичина, бекон, мисливські ковбаски, сир моцарела", allergens: "глютен, молоко" },
  16: { ingredients: "тісто пшеничне, вершковий соус, баварські ковбаски, цибуля, сир моцарела, зелень", allergens: "глютен, молоко, гірчиця (баварські ковбаски)" },

  // Суші
  17: { ingredients: "рис для суші, норі, лосось, сир вершковий філадельфія, огірок", allergens: "риба (лосось), молоко (вершковий сир)" },
  18: { ingredients: "рис для суші, норі, крабові палички, авокадо, огірок, ікра тобіко, кунжут", allergens: "риба (крабові палички на основі сурімі), кунжут" },
  19: { ingredients: "рис для суші, норі, вугор копчений, огірок, авокадо, соус унагі, кунжут", allergens: "риба (вугор), соя (соус унагі), кунжут" },
  20: { ingredients: "рис для суші, лосось свіжий, васабі, імбир маринований", allergens: "риба (лосось)" },
  21: { ingredients: "рис для суші, норі, вугор копчений, огірок, соус унагі, кунжут", allergens: "риба (вугор), соя, кунжут" },
  22: { ingredients: "асорті ролів: філадельфія, каліфорнія, нігірі з лососем, огірок маки", allergens: "риба, молоко, кунжут" },
  23: { ingredients: "асорті ролів: запечені роли з креветкою, темпура роли, нігірі з вугром, огірок маки", allergens: "глютен (темпура), ракоподібні (креветка), риба (вугор), яйця (кляр), кунжут" },
  24: { ingredients: "рис для суші, норі, креветка темпура, огірок, соус спайсі-майонез, кунжут", allergens: "ракоподібні (креветка), глютен (кляр темпура), яйця (майонез, кляр), соя, кунжут" },

  // Десерти
  25: { ingredients: "сир маскарпоне, савоярді (бісквітне печиво), кава еспресо, какао, яйця, цукор", allergens: "молоко (маскарпоне), глютен (печиво), яйця" },
  26: { ingredients: "вершковий сир, пісочна основа з печива, яйця, вершки, цукор", allergens: "молоко, глютен (основа), яйця" },
  27: { ingredients: "темний шоколад, вершкове масло, яйця, пшеничне борошно, цукор", allergens: "глютен, молоко, яйця, може містити сліди горіхів" },
  28: { ingredients: "медові коржі, сметанний крем, мед, яйця, пшеничне борошно", allergens: "глютен, молоко, яйця" },
  29: { ingredients: "вершки, желатин, ванільний стручок, ягідний соус", allergens: "молоко (без глютену)" },
  30: { ingredients: "шоколадний брауні, волоські горіхи, вершкове морозиво", allergens: "глютен, молоко, яйця, горіхи (волоські)" },
  31: { ingredients: "листкове тісто, заварний крем, яйця, вершкове масло", allergens: "глютен, молоко, яйця" },
  32: { ingredients: "коржі-безе з кешью, масляний крем, шоколадна глазур", allergens: "яйця (білки в безе), молоко (масляний крем), горіхи (кешью)" },

  // Супи
  33: { ingredients: "яловичина, буряк, білокачанна капуста, картопля, морква, часник, сметана", allergens: "молоко (сметана), може містити селеру" },
  34: { ingredients: "печериці, вершки, картопля, цибуля, вершкове масло", allergens: "молоко, глютен (борошняне загущення)" },
  35: { ingredients: "креветки, кокосове молоко, лемонграс, гриби, чилі, лайм, рибний соус", allergens: "ракоподібні (креветки), риба (рибний соус)" },
  36: { ingredients: "яловичина, копчені ковбаски, солоні огірки, маслини, лимон, сметана", allergens: "молоко (сметана), гірчиця (ковбаски)" },
  37: { ingredients: "гарбуз, вершки, картопля, імбир, вершкове масло", allergens: "молоко" },
  38: { ingredients: "курячий бульйон, яєчна локшина, куряче філе, морква, зелень", allergens: "глютен (локшина), яйця (яєчна локшина), може містити селеру" },
  39: { ingredients: "яловичина, рис, волоські горіхи, томати, часник, спеції", allergens: "горіхи (волоські)" },
  40: { ingredients: "яловичина, копчена шинка, ковбаски, солоні огірки, маслини, сметана", allergens: "молоко (сметана), гірчиця (ковбаски)" },
};

function parseWeightNum(weightStr) {
  return parseInt(weightStr, 10) || 0;
}

function enrichWithCharacteristics(menu) {
  return menu.map((item) => {
    const [min, max] = CATEGORY_CAL_RANGE[item.cat] || [150, 400];
    const details = DISH_DETAILS[item.id] || { ingredients: "уточнюйте у кухні", allergens: "уточнюйте у кухні" };
    // Детермінований "розкид" калорійності в межах діапазону категорії, залежно від id страви
    const spread = (item.id * 37) % 100 / 100; // 0..0.99, стабільне для кожного id
    const calories = Math.round(min + (max - min) * spread);
    const baseWeightNum = parseWeightNum(item.weight);
    const xlWeightNum = parseWeightNum(item.weightXL);
    const caloriesXL = baseWeightNum ? Math.round(calories * (xlWeightNum / baseWeightNum)) : calories;
    return {
      ...item,
      calories,
      caloriesXL,
      ingredients: details.ingredients,
      allergens: details.allergens,
    };
  });
}

const MENU = enrichWithCharacteristics(RAW_MENU);

const DELIVERY_FEE = 39;

const SIZE_LABELS = { base: "Звичайна", xl: "XL" };

function getDish(id) {
  return MENU.find((d) => d.id === Number(id));
}

function sizeWeight(dish, size) {
  return size === "xl" ? dish.weightXL : dish.weight;
}
function sizePrice(dish, size) {
  return size === "xl" ? dish.priceXL : dish.price;
}
function sizeCalories(dish, size) {
  return size === "xl" ? dish.caloriesXL : dish.calories;
}

function cartKey(id, size) {
  return `${id}__${size}`;
}
function parseCartKey(key) {
  const [id, size] = String(key).split("__");
  return { id: Number(id), size: size || "base" };
}

// cart: { "id__size": qty }
let cart = JSON.parse(localStorage.getItem("patelnya_cart") || "{}");
let activeCat = "Усі";

function saveCart() {
  localStorage.setItem("patelnya_cart", JSON.stringify(cart));
}

function cartItemsCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [key, qty]) => {
    const { id, size } = parseCartKey(key);
    const dish = getDish(id);
    return sum + (dish ? sizePrice(dish, size) * qty : 0);
  }, 0);
}

function addToCart(id, size) {
  const key = cartKey(id, size);
  cart[key] = (cart[key] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQty(key, delta) {
  const newQty = (cart[key] || 0) + delta;
  if (newQty <= 0) {
    delete cart[key];
  } else {
    cart[key] = newQty;
  }
  saveCart();
  renderCart();
}

function renderTabs() {
  const cats = ["Усі", ...new Set(MENU.map(d => d.cat))];
  const tabsEl = document.getElementById("menuTabs");
  tabsEl.innerHTML = cats.map(cat =>
    `<button class="menu__tab ${cat === activeCat ? "active" : ""}" data-cat="${cat}">${cat}</button>`
  ).join("");
  tabsEl.querySelectorAll(".menu__tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.cat;
      renderTabs();
      renderMenu();
    });
  });
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const dishes = activeCat === "Усі" ? MENU : MENU.filter(d => d.cat === activeCat);
  grid.innerHTML = dishes.map(d => `
    <article class="dish">
      <div class="dish__imgwrap">
        <img class="dish__img" src="${d.img}" alt="${d.name}" loading="lazy">
        <div class="dish__badges">
          <span class="dish__weight">XL ${d.weightXL}</span>
          <span class="dish__weight">${d.weight}</span>
        </div>
      </div>
      <h3 class="dish__name">${d.name}</h3>
      <div class="dish__footer">
        <span class="dish__price">від ${d.price} ₴</span>
        <button class="dish__add" data-id="${d.id}" aria-label="Обрати ${d.name}">
          <span class="dish__add-icon">🛒</span>
        </button>
      </div>
    </article>
  `).join("");
  grid.querySelectorAll(".dish__add").forEach(btn => {
    btn.addEventListener("click", () => openProductModal(Number(btn.dataset.id)));
  });
}

function renderCart() {
  const list = document.getElementById("cartList");
  const empty = document.getElementById("cartEmpty");
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);

  document.getElementById("cartCount").textContent = cartItemsCount();

  if (entries.length === 0) {
    list.innerHTML = "";
    empty.style.display = "block";
    document.getElementById("checkoutBtn").disabled = true;
  } else {
    empty.style.display = "none";
    document.getElementById("checkoutBtn").disabled = false;
    list.innerHTML = entries.map(([key, qty]) => {
      const { id, size } = parseCartKey(key);
      const dish = getDish(id);
      if (!dish) return "";
      const weight = sizeWeight(dish, size);
      const price = sizePrice(dish, size);
      const sizeLabel = SIZE_LABELS[size] || "";
      return `
        <li class="cart__item">
          <span class="cart__item-name">${dish.name}
            <span class="cart__item-weight">${sizeLabel} · ${weight}</span>
          </span>
          <span class="cart__qty">
            <button data-key="${key}" data-delta="-1" aria-label="Зменшити">−</button>
            <span>${qty}</span>
            <button data-key="${key}" data-delta="1" aria-label="Збільшити">+</button>
          </span>
          <span class="cart__item-price">${price * qty} ₴</span>
        </li>
      `;
    }).join("");
    list.querySelectorAll("button[data-delta]").forEach(btn => {
      btn.addEventListener("click", () => changeQty(btn.dataset.key, Number(btn.dataset.delta)));
    });
  }

  const total = cartTotal();
  document.getElementById("cartTotal").textContent = total > 0 ? `${total + DELIVERY_FEE} ₴` : "0 ₴";
  document.getElementById("modalTotal").textContent = `${total + DELIVERY_FEE} ₴`;
}

const cartEl = document.getElementById("cart");
const overlayEl = document.getElementById("overlay");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");
const productModal = document.getElementById("productModal");

function openCart() {
  cartEl.classList.add("open");
  overlayEl.classList.add("show");
}
function closeCart() {
  cartEl.classList.remove("open");
  overlayEl.classList.remove("show");
}
function openModal(modal) {
  modal.classList.add("open");
  overlayEl.classList.add("show");
}
function closeModal(modal) {
  modal.classList.remove("open");
  overlayEl.classList.remove("show");
}

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("overlay").addEventListener("click", () => {
  closeCart();
  closeModal(checkoutModal);
  closeModal(successModal);
  closeModal(productModal);
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  closeCart();
  openModal(checkoutModal);
});
document.getElementById("modalClose").addEventListener("click", () => closeModal(checkoutModal));
document.getElementById("successClose").addEventListener("click", () => closeModal(successModal));

// ---------- Модалка вибору товару (розмір + інгредієнти) ----------
let currentProductId = null;
let currentProductSize = "base";

function openProductModal(id) {
  currentProductId = id;
  currentProductSize = "base";
  renderProductModal();
  openModal(productModal);
}

function renderProductModal() {
  const dish = getDish(currentProductId);
  if (!dish) return;

  document.getElementById("productModalImg").src = dish.img;
  document.getElementById("productModalImg").alt = dish.name;
  document.getElementById("productModalCat").textContent = dish.cat;
  document.getElementById("productModalName").textContent = dish.name;
  document.getElementById("productModalIngredients").textContent = dish.ingredients;
  document.getElementById("productModalAllergens").textContent = dish.allergens;
  document.getElementById("productModalCalories").textContent = sizeCalories(dish, currentProductSize);
  document.getElementById("productModalWeight").textContent = sizeWeight(dish, currentProductSize);
  document.getElementById("productModalPrice").textContent = `${sizePrice(dish, currentProductSize)} ₴`;

  const sizesEl = document.getElementById("productModalSizes");
  sizesEl.innerHTML = `
    <button type="button" class="size-pill ${currentProductSize === "base" ? "active" : ""}" data-size="base">
      <span class="size-pill__label">Звичайна</span>
      <span class="size-pill__weight">${dish.weight}</span>
      <span class="size-pill__price">${dish.price} ₴</span>
    </button>
    <button type="button" class="size-pill ${currentProductSize === "xl" ? "active" : ""}" data-size="xl">
      <span class="size-pill__label">XL</span>
      <span class="size-pill__weight">${dish.weightXL}</span>
      <span class="size-pill__price">${dish.priceXL} ₴</span>
    </button>
  `;
  sizesEl.querySelectorAll(".size-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentProductSize = btn.dataset.size;
      renderProductModal();
    });
  });

  const addBtn = document.getElementById("productModalAdd");
  addBtn.textContent = "Додати в кошик";
  addBtn.classList.remove("added");
}

document.getElementById("productModalClose").addEventListener("click", () => closeModal(productModal));

document.getElementById("productModalAdd").addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentProductId == null) return;
  addToCart(currentProductId, currentProductSize);
  const btn = e.currentTarget;
  btn.textContent = "Додано ✓";
  btn.classList.add("added");
  setTimeout(() => {
    if (!productModal.classList.contains("open")) return;
    btn.textContent = "Додати в кошик";
    btn.classList.remove("added");
  }, 900);
});

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const orderNumber = String(Math.floor(Math.random() * 900) + 100);
  document.getElementById("orderNumber").textContent = orderNumber;

  const formData = new FormData(e.target);
  const total = cartTotal() + DELIVERY_FEE;

  const orderItems = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([key, qty]) => {
      const { id, size } = parseCartKey(key);
      const dish = getDish(id);
      const price = sizePrice(dish, size);
      return {
        id: dish.id,
        name: dish.name,
        cat: dish.cat,
        size,
        sizeLabel: SIZE_LABELS[size] || "",
        weight: sizeWeight(dish, size),
        price,
        qty,
        subtotal: price * qty,
        calories: sizeCalories(dish, size),
        ingredients: dish.ingredients,
        allergens: dish.allergens,
      };
    });

  const order = {
    orderNumber,
    createdAt: new Date().toISOString(),
    customer: {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      comment: formData.get("comment") || "",
    },
    items: orderItems,
    deliveryFee: DELIVERY_FEE,
    total,
    status: "Готується",
  };

  // Замовлення потрапляє в "активні" (готується на кухні) і лише коли
  // персонал натисне "Готово" в адмін-панелі — переїде в історію замовлень.
  DB.saveActiveOrder(order).catch((err) => console.error("Не вдалося зберегти замовлення в БД:", err));

  cart = {};
  saveCart();
  renderCart();

  closeModal(checkoutModal);
  openModal(successModal);
  e.target.reset();
});

// ---------- Ініціалізація ----------
renderTabs();
renderMenu();
renderCart();

DB.syncProducts(MENU).catch((err) => console.error("Не вдалося записати каталог товарів у БД:", err));
