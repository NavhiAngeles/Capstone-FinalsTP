import { loadCSS } from "../js/utils/loadCSS.js";
import { navigate } from "../js/utils/navigate.js";

export function renderDashboard() {

  loadCSS("./css/dashboard.css");
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
        ${createMenuItem("Dashboard", "/dashboard", true)}
        ${createMenuItem("Shipments", "/shipment")}
        ${createMenuItem("Fleet Management", "/fleet")}
        ${createMenuItem("Customers", "/customer")}
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
        ${createMenuItem(
  "Settings",
  "/settings/account"
)}
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
        <h1>Dashboard</h1>

        <input type="text" id="search" placeholder="Search fleet..." />

        <div class="topbar-right">
          <button id="notifBtn">🔔</button>
          <div class="avatar"></div>
        </div>
      </header>

      <!-- Content -->
      <section class="content">

        <div class="header">
          <span>SERVICING NUEVA ECIJA</span>
          <h2>Fleet Operations Overview</h2>
        </div>

        <!-- Stats -->
        <div class="stats">
          ${card("Active Shipments", "1,482", "green", "↑ +5% vs last week")}
          ${card("Delayed Shipments", "12", "red", "↑ 2 from yesterday")}
          ${card("Available Trucks", "45", "yellow", "Low availability warning")}
          ${card("Pending Dispatch", "86", "gray", "Ready for assignment")}
        </div>

        <!-- Main grid -->
        <div class="grid">

          <!-- Map -->
          <div class="map-card">
            <img src="../assets/images/map.png" />
          </div>

          <!-- Right Panel -->
          <div class="right-panel">
            <h3>Priority Alerts</h3>
            <div class="alert red">Route delay detected</div>
            <div class="alert orange">Compliance issue</div>

            <h3>Unassigned Shipments</h3>
            <div class="alert blue">12 shipments pending</div>

            <h3>Operations Feed</h3>
            <div class="feed">
              <p>Truck #21 dispatched</p>
              <p>Shipment #889 delivered</p>
              <p>Driver shift completed</p>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div class="bottom">

          <div class="analytics card">
            <h3>Performance & Analytics</h3>
            <p>On-time delivery: 96.8%</p>
            <p>Completed today: 342</p>
            <div class="chart">Shipment Trends</div>
          </div>

          <div class="resources card">
            <h3>Resource Snapshot</h3>

            <div>
              <span>Available</span>
              <div class="bar green"></div>
            </div>
            <div>
              <span>In Use</span>
              <div class="bar blue"></div>
            </div>
            <div>
              <span>Maintenance</span>
              <div class="bar orange"></div>
            </div>

            <p>Driver Hours: 8.4h avg</p>
            <p>Pallet Wraps: Low</p>
            <p>Coolant Fluid: Critical</p>
          </div>

        </div>

      </section>
    </main>
  </div>
  `;

  attachDashboardEvents();
}

/* Helpers */
function createMenuItem(name, path, active = false) {

  return `
    <div
      class="menu-item ${active ? "active" : ""}"
      data-path="${path}"
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
function attachDashboardEvents() {

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

  document.getElementById("search")
    .addEventListener("input", (e) => {
      console.log("Searching:", e.target.value);
    });

    const reportsToggle = document.getElementById("reportsToggle");

const reportsSubmenu =
  document.getElementById("reportsSubmenu");

reportsToggle.addEventListener("click", () => {

  reportsSubmenu.classList.toggle("hidden");

});

}
