function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

async function renderCurrentOrder() {
  const box = document.getElementById("currentOrderBox");
  const current = await DB.getCurrentOrder();
  const products = await DB.getProducts();

  const entries = current ? Object.entries(current.items).filter(([, qty]) => qty > 0) : [];

  if (entries.length === 0) {
    box.innerHTML = `<p class="admin__empty">Кошик порожній — активного замовлення немає.</p>`;
    return;
  }

  let total = 0;
  const rows = entries.map(([id, qty]) => {
    const p = products.find((d) => d.id === Number(id));
    if (!p) return "";
    const subtotal = p.price * qty;
    total += subtotal;
    return `
      <tr>
        <td>${p.name}</td>
        <td>${p.cat}</td>
        <td class="num">${qty}</td>
        <td class="num">${p.price} ₴</td>
        <td class="num">${subtotal} ₴</td>
      </tr>`;
  }).join("");

  box.innerHTML = `
    <table class="admin-table">
      <thead><tr><th>Товар</th><th>Категорія</th><th class="num">К-сть</th><th class="num">Ціна</th><th class="num">Сума</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="text-align:right; margin-top:.8rem; font-family:var(--font-display);">Разом: ${total} ₴ (+ доставка)</p>
  `;
}

async function renderOrders() {
  const box = document.getElementById("ordersBox");
  const countEl = document.getElementById("ordersCount");
  const orders = await DB.getOrders();

  countEl.textContent = orders.length;

  if (orders.length === 0) {
    box.innerHTML = `<p class="admin__empty">Замовлень ще не було.</p>`;
    return;
  }

  box.innerHTML = orders.map((order) => {
    const itemsRows = order.items.map((it) => `
      <tr>
        <td>${it.name}</td>
        <td class="num">${it.qty}</td>
        <td class="num">${it.price} ₴</td>
        <td class="num">${it.subtotal} ₴</td>
        <td class="num">${it.calories ?? "—"} ккал</td>
      </tr>`).join("");

    return `
      <div class="order-card">
        <div class="order-card__head">
          <span class="order-card__num">№ ${order.orderNumber}</span>
          <span class="order-card__status">${order.status}</span>
          <span class="order-card__date">${formatDate(order.createdAt)}</span>
        </div>
        <div class="order-card__customer">
          <b>${order.customer.name}</b> · ${order.customer.phone}<br>
          ${order.customer.address}${order.customer.comment ? ` · «${order.customer.comment}»` : ""}
        </div>
        <table class="admin-table">
          <thead><tr><th>Товар</th><th class="num">К-сть</th><th class="num">Ціна</th><th class="num">Сума</th><th class="num">Ккал</th></tr></thead>
          <tbody>${itemsRows}</tbody>
        </table>
        <div class="order-card__total">Доставка: ${order.deliveryFee} ₴ · Разом: ${order.total} ₴</div>
      </div>
    `;
  }).join("");
}

let allProducts = [];
let activeFilterCat = "Усі";

function renderProductFilters() {
  const cats = ["Усі", ...new Set(allProducts.map((p) => p.cat))];
  const el = document.getElementById("productFilters");
  el.innerHTML = cats.map((cat) =>
    `<button data-cat="${cat}" class="${cat === activeFilterCat ? "active" : ""}">${cat}</button>`
  ).join("");
  el.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilterCat = btn.dataset.cat;
      renderProductFilters();
      renderProductsTable();
    });
  });
}

function renderProductsTable() {
  const box = document.getElementById("productsBox");
  const list = activeFilterCat === "Усі" ? allProducts : allProducts.filter((p) => p.cat === activeFilterCat);

  const rows = list.map((p) => `
    <tr>
      <td class="num">${p.id}</td>
      <td>${p.name}</td>
      <td><span class="pill">${p.cat}</span></td>
      <td class="num">${p.weight}</td>
      <td class="num">${p.price} ₴</td>
      <td class="num">${p.calories} ккал</td>
      <td>${p.ingredients}</td>
      <td>${p.allergens}</td>
    </tr>
  `).join("");

  box.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th><th>Назва</th><th>Категорія</th><th class="num">Вага</th>
          <th class="num">Ціна</th><th class="num">Калорії</th><th>Склад</th><th>Алергени</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

async function renderProducts() {
  allProducts = await DB.getProducts();
  document.getElementById("productsCount").textContent = allProducts.length;
  renderProductFilters();
  renderProductsTable();
}

(async function init() {
  await renderCurrentOrder();
  await renderOrders();
  await renderProducts();
})();
