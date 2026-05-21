import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderReportsShipments() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/report/shipmentReport.css"
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
              class="submenu-item active"
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
            <h2>Reports — Shipments</h2>

            <p>
              Comprehensive analysis of delivery
              performance and volume.
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
            "Total Shipments",
            "284",
            "+12%",
            "green"
          )}

          ${statCard(
            "On-Time Rate",
            "87%",
            "-3%",
            "red"
          )}

          ${statCard(
            "Cancelled Shipments",
            "8",
            "-0%",
            "gray"
          )}

        </div>

        <!-- Analytics -->
        <div class="analytics-grid">

          <!-- Shipment Status -->
          <div class="chart-card">

            <div class="card-header">
              <h3>Shipment Status</h3>
            </div>

            <div class="diamond-chart">

              <div class="diamond-inner">
                <h2>284</h2>
                <span>TOTAL</span>
              </div>

            </div>

            <div class="legend">

              <div>
                <span class="dot blue"></span>
                Completed (180)
              </div>

              <div>
                <span class="dot gray"></span>
                Active (70)
              </div>

              <div>
                <span class="dot yellow"></span>
                Delayed (26)
              </div>

              <div>
                <span class="dot red"></span>
                Cancelled (8)
              </div>

            </div>

          </div>

          <!-- Trend -->
          <div class="chart-card">

            <div class="card-header">
              <h3>Delivery Performance Trend</h3>
            </div>

            <div class="trend-chart">

              <div class="trend-line"></div>

            </div>

          </div>

        </div>

        <!-- Table -->
        <div class="table-card">

          <div class="table-header">

            <h3>Shipment Ledger</h3>

            <div class="table-actions">
              ⋮
            </div>

          </div>

          <table class="report-table">

            <thead>

              <tr>
                <th>Shipment ID</th>
                <th>Customer</th>
                <th>Route</th>
                <th>Status</th>
                <th>Planned ETA</th>
                <th>Actual Delivery</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>SHP-8042</td>
                <td>Reyna Pascual</td>
                <td>Cabanatuan → Gapan</td>

                <td>
                  <span class="status completed">
                    Completed
                  </span>
                </td>

                <td>Oct 12, 2:30 PM</td>
                <td>Oct 12, 2:18 PM</td>
              </tr>

              <tr>
                <td>SHP-8050</td>
                <td>Benito Aquino</td>
                <td>Talavera → Guimba</td>

                <td>
                  <span class="status delayed">
                    Delayed
                  </span>
                </td>

                <td>Oct 15, 4:00 PM</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>SHP-8039</td>
                <td>Noel Castillo</td>
                <td>San Jose → Science City</td>

                <td>
                  <span class="status active">
                    Active
                  </span>
                </td>

                <td>Oct 18, 10:00 AM</td>
                <td>In Transit</td>
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