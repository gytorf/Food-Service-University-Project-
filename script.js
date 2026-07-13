const MENU = [
  { id: 1, cat: "Салати", name: "Цезар з куркою", weight: "220 г", price: 165, img: "img/salad/salad1.webp" },
  { id: 2, cat: "Салати", name: "Грецький салат", weight: "200 г", price: 135, img: "img/salad/salad2.webp" },
  { id: 3, cat: "Салати", name: "Салат з тунцем", weight: "210 г", price: 175, img: "img/salad/salad3.webp" },
  { id: 4, cat: "Салати", name: "Овочевий салат", weight: "200 г", price: 95, img: "img/salad/salad4.webp" },
  { id: 5, cat: "Салати", name: "Салат з креветками", weight: "200 г", price: 195, img: "img/salad/salad5.webp" },
  { id: 6, cat: "Салати", name: "Вітамінний салат", weight: "180 г", price: 105, img: "img/salad/salad6.webp" },
  { id: 7, cat: "Салати", name: "Салат Капрезе", weight: "190 г", price: 145, img: "img/salad/salad7.webp" },
  { id: 8, cat: "Салати", name: "Салат з куркою і ананасом", weight: "210 г", price: 155, img: "img/salad/salad8.webp" },

  { id: 9, cat: "Піца", name: "Маргарита", weight: "450 г", price: 185, img: "img/pizza/pizza1.webp" },
  { id: 10, cat: "Піца", name: "Пепероні", weight: "450 г", price: 215, img: "img/pizza/pizza2.webp" },
  { id: 11, cat: "Піца", name: "Чотири сири", weight: "450 г", price: 225, img: "img/pizza/pizza3.webp" },
  { id: 12, cat: "Піца", name: "Гавайська", weight: "450 г", price: 205, img: "img/pizza/pizza4.webp" },
  { id: 13, cat: "Піца", name: "Барбекю з куркою", weight: "470 г", price: 220, img: "img/pizza/pizza5.webp" },
  { id: 14, cat: "Піца", name: "Вегетаріанська", weight: "450 г", price: 195, img: "img/pizza/pizza6.webp" },
  { id: 15, cat: "Піца", name: "М'ясна", weight: "480 г", price: 235, img: "img/pizza/pizza7.webp" },
  { id: 16, cat: "Піца", name: "Баварезе", weight: "600 г", price: 260, img: "img/pizza/pizza8.webp" },

  { id: 17, cat: "Суші", name: "Філадельфія", weight: "260 г", price: 245, img: "img/sushi/sushi1.webp" },
  { id: 18, cat: "Суші", name: "Каліфорнія", weight: "250 г", price: 225, img: "img/sushi/sushi2.webp" },
  { id: 19, cat: "Суші", name: "Дракон", weight: "270 г", price: 265, img: "img/sushi/sushi3.webp" },
  { id: 20, cat: "Суші", name: "Суші з лососем", weight: "255 г", price: 235, img: "img/sushi/sushi4.webp" },
  { id: 21, cat: "Суші", name: "Унагі маки", weight: "180 г", price: 195, img: "img/sushi/sushi5.webp" },
  { id: 22, cat: "Суші", name: "Сет Токіо", weight: "620 г", price: 450, img: "img/sushi/sushi6.webp" },
  { id: 23, cat: "Суші", name: "Сет Осака", weight: "700 г", price: 520, img: "img/sushi/sushi7.webp" },
  { id: 24, cat: "Суші", name: "Темпура ролл", weight: "230 г", price: 210, img: "img/sushi/sushi8.webp" },

  { id: 25, cat: "Десерти", name: "Тірамісу", weight: "150 г", price: 125, img: "img/desert/desert1.webp" },
  { id: 26, cat: "Десерти", name: "Чізкейк Нью-Йорк", weight: "150 г", price: 130, img: "img/desert/desert2.webp" },
  { id: 27, cat: "Десерти", name: "Шоколадний фондан", weight: "140 г", price: 135, img: "img/desert/desert3.webp" },
  { id: 28, cat: "Десерти", name: "Медовик", weight: "150 г", price: 110, img: "img/desert/desert4.webp" },
  { id: 29, cat: "Десерти", name: "Панна-котта", weight: "130 г", price: 115, img: "img/desert/desert5.webp" },
  { id: 30, cat: "Десерти", name: "Брауні з морозивом", weight: "160 г", price: 120, img: "img/desert/desert6.webp" },
  { id: 31, cat: "Десерти", name: "Наполеон", weight: "150 г", price: 115, img: "img/desert/desert7.webp" },
  { id: 32, cat: "Десерти", name: "Київський торт", weight: "200 г", price: 110, img: "img/desert/desert8.webp" },

  { id: 33, cat: "Супи", name: "Борщ український", weight: "300 г", price: 95, img: "img/soup/soup1.webp" },
  { id: 34, cat: "Супи", name: "Крем-суп грибний", weight: "300 г", price: 105, img: "img/soup/soup2.webp" },
  { id: 35, cat: "Супи", name: "Том Ям з креветками", weight: "300 г", price: 165, img: "img/soup/soup3.webp" },
  { id: 36, cat: "Супи", name: "Солянка", weight: "300 г", price: 115, img: "img/soup/soup4.webp" },
  { id: 37, cat: "Супи", name: "Суп-пюре гарбузовий", weight: "300 г", price: 95, img: "img/soup/soup5.webp" },
  { id: 38, cat: "Супи", name: "Курячий бульйон з локшиною", weight: "300 г", price: 85, img: "img/soup/soup6.webp" },
  { id: 39, cat: "Супи", name: "Харчо", weight: "300 г", price: 110, img: "img/soup/soup7.webp" },
  { id: 40, cat: "Супи", name: "М'ясна солянка", weight: "300 г", price: 95, img: "img/soup/soup8.webp" },
];

const DELIVERY_FEE = 39;

let cart = JSON.parse(localStorage.getItem("patelnya_cart") || "{}");
let activeCat = "Усі";

function saveCart() {
  localStorage.setItem("patelnya_cart", JSON.stringify(cart));
}

function cartItemsCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const dish = MENU.find(d => d.id === Number(id));
    return sum + (dish ? dish.price * qty : 0);
  }, 0);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const newQty = (cart[id] || 0) + delta;
  if (newQty <= 0) {
    delete cart[id];
  } else {
    cart[id] = newQty;
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
        <span class="dish__weight">${d.weight}</span>
      </div>
      <h3 class="dish__name">${d.name}</h3>
      <div class="dish__footer">
        <span class="dish__price">${d.price} ₴</span>
        <button class="dish__add" data-id="${d.id}" aria-label="Додати ${d.name} до кошика">+</button>
      </div>
    </article>
  `).join("");
  grid.querySelectorAll(".dish__add").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
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
    list.innerHTML = entries.map(([id, qty]) => {
      const dish = MENU.find(d => d.id === Number(id));
      return `
        <li class="cart__item">
          <span class="cart__item-name">${dish.name} <span class="cart__item-weight">(${dish.weight})</span></span>
          <span class="cart__qty">
            <button data-id="${id}" data-delta="-1" aria-label="Зменшити">−</button>
            <span>${qty}</span>
            <button data-id="${id}" data-delta="1" aria-label="Збільшити">+</button>
          </span>
          <span class="cart__item-price">${dish.price * qty} ₴</span>
        </li>
      `;
    }).join("");
    list.querySelectorAll("button[data-delta]").forEach(btn => {
      btn.addEventListener("click", () => changeQty(Number(btn.dataset.id), Number(btn.dataset.delta)));
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
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  closeCart();
  openModal(checkoutModal);
});
document.getElementById("modalClose").addEventListener("click", () => closeModal(checkoutModal));
document.getElementById("successClose").addEventListener("click", () => closeModal(successModal));

document.getElementById("checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const orderNumber = String(Math.floor(Math.random() * 900) + 100);
  document.getElementById("orderNumber").textContent = orderNumber;

  cart = {};
  saveCart();
  renderCart();

  closeModal(checkoutModal);
  openModal(successModal);
  e.target.reset();
});

renderTabs();
renderMenu();
renderCart();
