import { loadCSS } from "../js/utils/loadCSS.js";
import { navigate } from "../js/utils/navigate.js";

export function renderCompliance() {

  loadCSS("./css/compliance.css");

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
        ${createMenuItem("Customers", "/customer")}
        ${createMenuItem("Compliance", "/compliance", true)}
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

        <h1>Compliance</h1>

        <input
          type="text"
          placeholder="Search compliance..."
          id="complianceSearch"
        />

        <div class="topbar-right">
          <button id="notifBtn">🔔</button>
          <div class="avatar"></div>
        </div>

      </header>

      <!-- Content -->
      <section class="content">

        <div class="header">
          <span>DRIVER REGULATIONS</span>
          <h2>Driver Compliance</h2>
        </div>

        <!-- Stats -->
        <div class="stats">

          ${card("Fully Compliant", "98", "green", "All requirements complete")}
          ${card("Expiring Soon", "14", "yellow", "Renewal required")}
          ${card("Expired", "6", "red", "Immediate action needed")}
          ${card("Pending Review", "9", "blue", "Awaiting approval")}

        </div>

        <!-- Compliance Table -->
        <div class="compliance-table-card">

          <div class="table-header">

            <input
              type="text"
              class="table-search"
              placeholder="Search compliance..."
            />

          </div>

          <table class="compliance-table">

            <thead>
              <tr>
                <th>Driver</th>
                <th>License</th>
                <th>Medical</th>
                <th>NBI</th>
                <th>Status</th>
                <th>Updated</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Jose Dela Cruz</td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="status compliant">Compliant</span></td>
                <td>Oct 12, 2023</td>
              </tr>

              <tr>
                <td>Ricardo Bautista</td>
                <td><span class="badge expired">Expired</span></td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="status expired-status">Non-Compliant</span></td>
                <td>Oct 10, 2023</td>
              </tr>

              <tr>
                <td>Manuel Pascual</td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="badge review">Under Review</span></td>
                <td><span class="badge valid">Valid</span></td>
                <td><span class="status review-status">Pending Review</span></td>
                <td>Oct 15, 2023</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>

  </div>
  `;

  attachComplianceEvents();
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

function attachComplianceEvents() {

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
    .getElementById("complianceSearch")
    .addEventListener("input", (e) => {
      console.log("Searching compliance:", e.target.value);
    });

    const reportsToggle = document.getElementById("reportsToggle");

const reportsSubmenu =
  document.getElementById("reportsSubmenu");

reportsToggle.addEventListener("click", () => {

  reportsSubmenu.classList.toggle("hidden");

});

}