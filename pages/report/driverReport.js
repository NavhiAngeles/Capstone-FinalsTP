import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderDriverReport() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/report/driverReport.css"
  );

  const app = document.getElementById("app");

  app.innerHTML = `

  <div class="dashboard">

    <!-- Sidebar -->
    <aside class="sidebar">

      <div class="sidebar-top">
        <h2>TANAW</h2>
        <p>NUEVA ECIJA LOGISTICS</p>
      </div>

      <nav class="menu">

        ${menuItem("Dashboard", "/dashboard")}
        ${menuItem("Shipments", "/shipment")}
        ${menuItem("Fleet Management", "/fleet")}
        ${menuItem("Customers", "/customer")}
        ${menuItem("Compliance", "/compliance")}

        <!-- Reports -->
        <div class="menu-group">

          <div class="menu-item active">
            Reports
          </div>

          <div class="submenu">

            <div
              class="submenu-item"
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
              class="submenu-item active"
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

        ${menuItem(
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

        <input
          type="text"
          placeholder="Search..."
        />

        <div class="topbar-right">
          <button id="notifBtn">🔔</button>
          <div class="avatar"></div>
        </div>

      </header>

      <!-- Content -->
      <section class="content">

        <!-- Header -->
        <div class="header-row">

          <div>
            <h2>Reports — Drivers</h2>

            <p>
              Analyze individual driver
              performance, reliability,
              and delivery metrics.
            </p>
          </div>

          <div class="report-actions">

            <button class="secondary-btn">
              Schedule Report
            </button>

            <button class="primary-btn">
              Export
            </button>

          </div>

        </div>

        <!-- Filters -->
        <div class="filters">

          <button class="filter">
            Today
          </button>

          <button class="filter">
            This Week
          </button>

          <button class="filter active">
            This Month
          </button>

          <button class="filter">
            Last 3 Months
          </button>

          <button class="filter">
            Custom Range
          </button>

        </div>

        <!-- Stats -->
        <div class="stats">

          ${statCard(
            "Active Drivers",
            "118",
            "+0%",
            "gray"
          )}

          ${statCard(
            "Avg. On-Time Rate",
            "87%",
            "-3%",
            "red"
          )}

          ${statCard(
            "Total Trips",
            "284",
            "+12%",
            "green"
          )}

        </div>

        <!-- Charts -->
        <div class="analytics-grid">

          <!-- Driver Rates -->
          <div class="chart-card">

            <div class="card-header">
              <h3>On-Time Rate by Driver</h3>
            </div>

            <div class="driver-bars">

              ${driverBar("J. Doe", "95%")}
              ${driverBar("M. Smith", "88%")}
              ${driverBar("A. Lee", "92%")}
              ${driverBar("R. Garcia", "78%", true)}
              ${driverBar("C. Chen", "98%")}

            </div>

          </div>

          <!-- Delay Incidents -->
          <div class="chart-card">

            <div class="card-header">
              <h3>Delay Incidents</h3>
            </div>

            <div class="incident-bars">

              ${incidentBar("Traffic", 6)}
              ${incidentBar("Weather", 5)}
              ${incidentBar("Mechanical", 3)}
              ${incidentBar("Routing", 2)}
              ${incidentBar("Other", 1)}

            </div>

          </div>

        </div>

        <!-- Table -->
        <div class="table-card">

          <div class="table-header">

            <h3>Driver Performance</h3>

            <div class="table-actions">
              🔍
            </div>

          </div>

          <table class="report-table">

            <thead>

              <tr>
                <th>Driver</th>
                <th>Total Trips</th>
                <th>On-Time Rate</th>
                <th>Avg Rating</th>
                <th>Delay Incidents</th>
                <th>Total KM</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>John Doe</td>
                <td>42</td>
                <td>95%</td>
                <td>4.9</td>
                <td>1</td>
                <td>3,420</td>
                <td>
                  <span class="status active">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Maria Smith</td>
                <td>38</td>
                <td>88%</td>
                <td>4.6</td>
                <td>3</td>
                <td>2,980</td>
                <td>
                  <span class="status active">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td>Robert Garcia</td>
                <td>31</td>
                <td>78%</td>
                <td>4.1</td>
                <td>7</td>
                <td>2,150</td>
                <td>
                  <span class="status warning">
                    Review
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

  attachEvents();
}

/* Helpers */

function menuItem(name, path, active = false) {

  return `
    <div
      class="menu-item ${active ? "active" : ""}"
      data-path="${path || ""}"
    >
      ${name}
    </div>
  `;
}

function statCard(title, value, change, color) {

  return `
    <div class="stat-card">

      <h4>${title}</h4>

      <h2>${value}</h2>

      <p class="${color}">
        ${change}
      </p>

    </div>
  `;
}

function driverBar(name, rate, warning = false) {

  return `
    <div class="driver-row">

      <span>${name}</span>

      <div class="bar-container">

        <div
          class="driver-bar ${warning ? "warning" : ""}"
          style="width:${rate}"
        ></div>

      </div>

      <strong>${rate}</strong>

    </div>
  `;
}

function incidentBar(name, count) {

  return `
    <div class="incident-row">

      <span>${name}</span>

      <div class="incident-bar-container">

        <div
          class="incident-bar"
          style="width:${count * 40}px"
        ></div>

      </div>

      <strong>${count}</strong>

    </div>
  `;
}

/* Events */

function attachEvents() {

  document
    .querySelectorAll(".menu-item, .submenu-item")
    .forEach((item) => {

      item.addEventListener("click", () => {

        const path = item.dataset.path;

        if (path) {
          navigate(path);
        }

      });

    });

}