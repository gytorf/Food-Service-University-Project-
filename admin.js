function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function orderItemsTable(items) {
  const rows = items.map((it) => `
    <tr>
      <td>${it.name} ${it.sizeLabel ? `<span class="pill">${it.sizeLabel}</span>` : ""}<br><small>${it.weight || ""}</small></td>
      <td class="num"><span class="cell-label">К-сть</span>${it.qty}</td>
      <td class="num"><span class="cell-label">Ціна</span>${it.price} ₴</td>
      <td class="num"><span class="cell-label">Сума</span>${it.subtotal} ₴</td>
      <td class="num"><span class="cell-label">Ккал</span>${it.calories ?? "—"} ккал</td>
    </tr>`).join("");

  return `
    <table class="admin-table">
      <thead><tr><th>Товар</th><th class="num">К-сть</th><th class="num">Ціна</th><th class="num">Сума</th><th class="num">Ккал</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

async function renderActiveOrders() {
  const box = document.getElementById("currentOrderBox");
  const countEl = document.getElementById("activeOrdersCount");
  const orders = await DB.getActiveOrders();

  countEl.textContent = orders.length;

  if (orders.length === 0) {
    box.innerHTML = `<p class="admin__empty">Активних замовлень немає — все приготовано.</p>`;
    return;
  }

  box.innerHTML = orders.map((order) => `
    <div class="order-card">
      <div class="order-card__head">
        <span class="order-card__num">№ ${order.orderNumber}</span>
        <span class="order-card__status order-card__status--pending">${order.status}</span>
        <span class="order-card__date">${formatDate(order.createdAt)}</span>
        <button type="button" class="order-card__ready" data-order="${order.orderNumber}">Готово ✓</button>
      </div>
      <div class="order-card__customer">
        <b>${order.customer.name}</b> · ${order.customer.phone}<br>
        ${order.customer.address}${order.customer.comment ? ` · «${order.customer.comment}»` : ""}
      </div>
      ${orderItemsTable(order.items)}
      <div class="order-card__total">Доставка: ${order.deliveryFee} ₴ · Разом: ${order.total} ₴</div>
    </div>
  `).join("");

  box.querySelectorAll(".order-card__ready").forEach((btn) => {
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      try {
        await DB.markOrderReady(btn.dataset.order);
        await renderActiveOrders();
        await renderOrders();
      } catch (err) {
        console.error("Не вдалося позначити замовлення готовим:", err);
        btn.disabled = false;
      }
    });
  });
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

  box.innerHTML = orders.map((order) => `
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
      ${orderItemsTable(order.items)}
      <div class="order-card__total">Доставка: ${order.deliveryFee} ₴ · Разом: ${order.total} ₴</div>
    </div>
  `).join("");
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
      <td class="num">${p.weightXL ?? "—"}</td>
      <td class="num">${p.priceXL != null ? p.priceXL + " ₴" : "—"}</td>
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
          <th class="num">Ціна</th><th class="num">Вага XL</th><th class="num">Ціна XL</th>
          <th class="num">Калорії</th><th>Склад</th><th>Алергени</th>
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
  await renderActiveOrders();
  await renderOrders();
  await renderProducts();
})();
