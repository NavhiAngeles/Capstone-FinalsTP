import { loadCSS } from "../js/utils/loadCSS.js";
import { navigate } from "../js/utils/navigate.js";

export function renderCustomer() {

    loadCSS("./css/customer.css");

  const app = document.getElementById("app");

  app.innerHTML = `

  <div class="dashboard">

    <!-- Sidebar -->
    <aside class="sidebar">

      <div class="sidebar-top">
        <h2>Mabutol Tracking</h2>
        <p>NUEVA ECIJA LOGISTICS</p>
      </div>

      <nav class="menu">

        ${createMenuItem("Dashboard", "/dashboard")}
        ${createMenuItem("Shipments", "/shipment")}
        ${createMenuItem("Fleet Management", "/fleet")}
        ${createMenuItem("Customers", "/customer", true)}
        ${createMenuItem("Compliance", "/compliance")}
        <div class="menu-group">

  <div
    class="menu-item"
    id="reportsToggle"
  >
    Reports
  </div>

  <div
    class="submenu hidden"
    id="reportsSubmenu"
  >

    <div
      class="submenu-item active"
      data-path="/report/overview"
    >
      Overview
    </div>

    <div
      class="submenu-item"
      data-path="/report/shipmentReport"
    >
      Shipments
    </div>

    <div
      class="submenu-item"
      data-path="/report/driverReport"
    >
      Drivers
    </div>

    <div
      class="submenu-item"
      data-path="/report/revenueReport"
    >
      Revenue
    </div>

  </div>

</div>
        ${createMenuItem("Settings")}

      </nav>

      <div class="sidebar-bottom">
        <span>Help Center</span>
        <span>Log Out</span>
      </div>

    </aside>

    <!-- Main -->
    <main class="main">

      <!-- Topbar -->
      <header class="topbar">

        <h1>Customers</h1>

        <input
          type="text"
          placeholder="Search customers..."
          id="customerSearch"
        />

        <div class="topbar-right">
          <button id="notifBtn">🔔</button>
          <div class="avatar"></div>
        </div>

      </header>

      <!-- Content -->
      <section class="content">

        <div class="header">
          <span>CUSTOMER MANAGEMENT</span>
          <h2>Customer Directory</h2>
        </div>

        <!-- Stats -->
        <div class="stats">

          ${card("Total Customers", "142", "blue", "Registered accounts")}
          ${card("Active This Month", "87", "green", "Returning users")}
          ${card("New This Week", "12", "yellow", "Recently registered")}
          ${card("Suspended", "3", "red", "Requires review")}

        </div>

        <!-- Customer Table -->
        <div class="customer-table-card">

          <div class="table-header">

            <input
              type="text"
              class="table-search"
              placeholder="Search customer..."
            />

          </div>

          <table class="customer-table">

            <thead>
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Bookings</th>
                <th>Last Booking</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Reyna Pascual</td>
                <td>0918 234 5678</td>
                <td>14 bookings</td>
                <td>Today 09:15 AM</td>
                <td>
                  <span class="status active">
                    ACTIVE
                  </span>
                </td>
              </tr>

              <tr>
                <td>Ernesto Villanueva</td>
                <td>0923 521 1238</td>
                <td>8 bookings</td>
                <td>Yesterday</td>
                <td>
                  <span class="status active">
                    ACTIVE
                  </span>
                </td>
              </tr>

              <tr>
                <td>Maricel Soriano</td>
                <td>0936 623 6734</td>
                <td>1 booking</td>
                <td>Oct 10, 2025</td>
                <td>
                  <span class="status suspended">
                    SUSPENDED
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>

  </div>
  `;

  attachCustomerEvents();
}

/* Helpers */

function createMenuItem(name, path, active = false) {

  return `
    <div
      class="menu-item ${active ? "active" : ""}"
      data-path="${path || ""}"
    >
      ${name}
    </div>
  `;
}

function card(title, value, color, note) {

  return `
    <div class="stat-card">
      <h4>${title}</h4>
      <h2>${value}</h2>
      <p class="${color}">${note}</p>
    </div>
  `;
}

/* Events */

function attachCustomerEvents() {

  document
  .querySelectorAll(".menu-item, .submenu-item")
  .forEach((item) => {

    item.addEventListener("click", () => {

      const path = item.dataset.path;

      if (path) {
        navigate(path);
      }

    document
        .querySelectorAll(".menu-item")
        .forEach((i) => i.classList.remove("active"));

      item.classList.add("active");

    });

  });

  document
    .getElementById("notifBtn")
    .addEventListener("click", () => {
      alert("No new notifications");
    });

  document
    .getElementById("customerSearch")
    .addEventListener("input", (e) => {
      console.log("Searching customer:", e.target.value);
    });

    const reportsToggle = document.getElementById("reportsToggle");

const reportsSubmenu =
  document.getElementById("reportsSubmenu");

reportsToggle.addEventListener("click", () => {

  reportsSubmenu.classList.toggle("hidden");

});

}