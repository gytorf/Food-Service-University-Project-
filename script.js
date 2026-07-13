const MENU = [
  { id: 1, cat: "Перші страви", name: "Борщ український", desc: "З пампушками та часниковою підливою", price: 95, emoji: "🍲" },
  { id: 2, cat: "Перші страви", name: "Солянка", desc: "Наваристий м'ясний суп зі сметаною", price: 105, emoji: "🥘" },
  { id: 3, cat: "Перші страви", name: "Крем-суп із гарбуза", desc: "З грінками та насінням гарбуза", price: 89, emoji: "🎃" },
  { id: 4, cat: "Другі страви", name: "Деруни зі сметаною", desc: "Хрумкі картопляні деруни, 6 шт", price: 78, emoji: "🥔" },
  { id: 5, cat: "Другі страви", name: "Котлета по-київськи", desc: "З картопляним пюре та овочами", price: 149, emoji: "🍗" },
  { id: 6, cat: "Другі страви", name: "Вареники з вишнею", desc: "12 шт, подаються зі сметаною", price: 99, emoji: "🍒" },
  { id: 7, cat: "Салати", name: "Олів'є", desc: "Класичний салат з ковбасою", price: 65, emoji: "🥗" },
  { id: 8, cat: "Салати", name: "Грецький салат", desc: "Свіжі овочі та сир фета", price: 79, emoji: "🥒" },
  { id: 9, cat: "Напої", name: "Узвар", desc: "Компот із сухофруктів, 400 мл", price: 39, emoji: "🍎" },
  { id: 10, cat: "Напої", name: "Морс журавлинний", desc: "Домашній морс, 400 мл", price: 42, emoji: "🧃" },
  { id: 11, cat: "Десерти", name: "Медовик", desc: "Класичний медовий торт, шматок", price: 68, emoji: "🍰" },
  { id: 12, cat: "Десерти", name: "Сирники", desc: "Зі згущеним молоком, 3 шт", price: 72, emoji: "🧀" },
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
      <span class="dish__emoji">${d.emoji}</span>
      <h3 class="dish__name">${d.name}</h3>
      <p class="dish__desc">${d.desc}</p>
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
          <span class="cart__item-name">${dish.name}</span>
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