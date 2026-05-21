import { loadCSS } from "../js/utils/loadCSS.js";
import { navigate } from "../js/utils/navigate.js";

export function renderFleet() {

  loadCSS("./css/fleet.css");
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
          ${createMenuItem("Fleet Management", "/fleet", true)}
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

    </aside>a

    <!-- Main -->
    <main class="main">

      <!-- Topbar -->
      <header class="topbar">

        <h1>Fleet Management</h1>

        <input
          type="text"
          placeholder="Search drivers..."
          id="fleetSearch"
        />

        <div class="topbar-right">
          <button id="notifBtn">🔔</button>
          <div class="avatar"></div>
        </div>

      </header>

      <!-- Content -->
      <section class="content">

        <div class="header">
          <span>LOGISTICS / ASSETS</span>
          <h2>Fleet Management Overview</h2>
        </div>

        <!-- Stats -->
        <div class="stats">

          ${card("Total Assets", "145", "green", "+2% vs last month")}
          ${card("Ready to Dispatch", "98", "blue", "67% of total fleet")}
          ${card("Out of Service", "12", "red", "Maintenance required")}
          ${card("Off Duty", "35", "yellow", "Drivers unavailable")}

        </div>

        <!-- Driver Table -->
        <div class="fleet-table-card">

          <div class="table-header">

            <input
              type="text"
              class="table-search"
              placeholder="Search driver..."
            />

          </div>

          <table class="fleet-table">

            <thead>
              <tr>
                <th>Driver</th>
                <th>License</th>
                <th>Vehicle</th>
                <th>Shipment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Jose Dela Cruz</td>
                <td>N01-22-34981</td>
                <td>Isuzu Forward</td>
                <td>SHP-8042</td>
                <td>
                  <span class="status active">
                    ON ROUTE
                  </span>
                </td>
              </tr>

              <tr>
                <td>Ricardo Bautista</td>
                <td>N02-23-11234</td>
                <td>Fuso Canter</td>
                <td>No Active Trip</td>
                <td>
                  <span class="status off">
                    OFF DUTY
                  </span>
                </td>
              </tr>

              <tr>
                <td>Antonio Luna</td>
                <td>N01-19-445566</td>
                <td>Isuzu Giga</td>
                <td>SHP-8045</td>
                <td>
                  <span class="status active">
                    ON ROUTE
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

    attachFleetEvents();
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

function attachFleetEvents() {

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
        .getElementById("fleetSearch")
        .addEventListener("input", (e) => {
            console.log("Searching fleet:", e.target.value);
        });

        const reportsToggle = document.getElementById("reportsToggle");

const reportsSubmenu =
  document.getElementById("reportsSubmenu");

reportsToggle.addEventListener("click", () => {

  reportsSubmenu.classList.toggle("hidden");

});

}