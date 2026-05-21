import { loadCSS } from "../js/utils/loadCSS.js";
import { navigate } from "../js/utils/navigate.js";

export function renderShipment() {

  loadCSS("./css/shipment.css");

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
        ${createMenuItem("Shipments", "/shipment", true)}
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
      data-path="/reports/shipments"
    >
      Shipments
    </div>

    <div
      class="submenu-item"
      data-path="/reports/drivers"
    >
      Drivers
    </div>

    <div
      class="submenu-item"
      data-path="/reports/revenue"
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

        <h1>Shipments</h1>

        <input
          type="text"
          id="shipmentSearch"
          placeholder="Search shipment..."
        />

        <div class="topbar-right">
          <button id="notifBtn">🔔</button>
          <div class="avatar"></div>
        </div>

      </header>

      <!-- Content -->
      <section class="content">

        <div class="header">
          <span>ACTIVE OPERATIONS</span>
          <h2>Shipment Monitoring</h2>
        </div>

        <!-- Stats -->
        <div class="stats">

          ${card("In Transit", "18", "green", "Currently on the road")}
          ${card("Loading", "4", "blue", "Preparing departure")}
          ${card("Delayed", "3", "red", "Immediate action needed")}
          ${card("On-Time Rate", "87%", "yellow", "Today's active shipments")}

        </div>

        <!-- Table -->
        <div class="shipment-table-card">

          <div class="table-header">
            <input
              type="text"
              class="table-search"
              placeholder="Search by shipment ID..."
            />
          </div>

          <table class="shipment-table">

            <thead>
              <tr>
                <th>Shipment ID</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Driver</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SHP-8042</td>
                <td>Cabanatuan</td>
                <td>Gapan City</td>
                <td><span class="status transit">IN TRANSIT</span></td>
                <td>Ricardo Mendoza</td>
              </tr>

              <tr>
                <td>SHP-8039</td>
                <td>San Jose City</td>
                <td>Science City</td>
                <td><span class="status delayed">DELAYED</span></td>
                <td>Eduardo Garcia</td>
              </tr>

              <tr>
                <td>SHP-8050</td>
                <td>Talavera</td>
                <td>Guimba</td>
                <td><span class="status loading">LOADING</span></td>
                <td>Jose Dizon</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>

  </div>
  `;

  attachShipmentEvents();
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

function attachShipmentEvents() {

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
    .getElementById("shipmentSearch")
    .addEventListener("input", (e) => {
      console.log("Searching shipment:", e.target.value);
    });

    const reportsToggle = document.getElementById("reportsToggle");

const reportsSubmenu =
  document.getElementById("reportsSubmenu");

reportsToggle.addEventListener("click", () => {

  reportsSubmenu.classList.toggle("hidden");

});

}