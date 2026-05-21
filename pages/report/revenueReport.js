import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderRevenueReport() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/report/revenueReport.css"
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
              class="submenu-item"
              data-path="/report/driverReport"
            >
              Drivers
            </div>

            <div
              class="submenu-item active"
              data-path="/report/revenueReport"
            >
              Revenue
            </div>

          </div>

        </div>

        ${menuItem("Settings")}

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
            <h2>Reports — Revenue</h2>

            <p>
              Monitor financial performance
              across shipments, customers,
              and routes.
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
            "Gross Revenue",
            "₱1.24M",
            "+8%",
            "green"
          )}

          ${statCard(
            "Net Revenue",
            "₱980,500",
            "+5%",
            "green"
          )}

          ${statCard(
            "Operating Costs",
            "₱260,000",
            "-0%",
            "gray"
          )}

          ${statCard(
            "Rev Per Shipment",
            "₱4,368",
            "+2%",
            "green"
          )}

        </div>

        <!-- Charts -->
        <div class="analytics-grid">

          <!-- Revenue Trend -->
          <div class="chart-card wide">

            <div class="card-header">

              <h3>Revenue Over Time</h3>

              <button class="filter small">
                Last 30 Days
              </button>

            </div>

            <div class="chart-placeholder">
              Revenue Trend Chart
            </div>

          </div>

          <!-- Cost Breakdown -->
          <div class="chart-card">

            <div class="card-header">
              <h3>Operating Cost Breakdown</h3>
            </div>

            <div class="bar-chart">

              <div class="bar-group">
                <div class="bar fuel"></div>
                <div class="bar maintenance"></div>
              </div>

              <div class="bar-group">
                <div class="bar fuel short"></div>
                <div class="bar maintenance tall"></div>
              </div>

              <div class="bar-group">
                <div class="bar fuel"></div>
                <div class="bar maintenance taller"></div>
              </div>

            </div>

          </div>

        </div>

        <!-- Bottom Grid -->
        <div class="bottom-grid">

          <!-- Top Customers -->
          <div class="info-card">

            <div class="card-header">

              <h3>Top Customers</h3>

              <button class="more-btn">
                ⋯
              </button>

            </div>

            <div class="customer-list">

              <div class="customer-row">
                <span>Alpha Industries</span>
                <strong>₱450k</strong>
              </div>

              <div class="customer-row">
                <span>Delta Logistics Group</span>
                <strong>₱320k</strong>
              </div>

              <div class="customer-row">
                <span>Metro Retail Corp</span>
                <strong>₱210k</strong>
              </div>

            </div>

          </div>

          <!-- Revenue Breakdown -->
          <div class="info-card">

            <div class="card-header">

              <h3>Revenue Breakdown by Route</h3>

              <button class="view-btn">
                View All →
              </button>

            </div>

            <table class="report-table">

              <thead>
                <tr>
                  <th>Route ID</th>
                  <th>Origin → Destination</th>
                  <th>Shipments</th>
                  <th>Revenue</th>
                  <th>Margin</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>RT-01</td>
                  <td>Cabanatuan → Gapan</td>
                  <td>42</td>
                  <td>₱180k</td>
                  <td>24%</td>
                </tr>

                <tr>
                  <td>RT-04</td>
                  <td>Talavera → Guimba</td>
                  <td>28</td>
                  <td>₱140k</td>
                  <td>19%</td>
                </tr>

                <tr>
                  <td>RT-09</td>
                  <td>San Jose → Science City</td>
                  <td>31</td>
                  <td>₱165k</td>
                  <td>22%</td>
                </tr>

              </tbody>

            </table>

          </div>

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