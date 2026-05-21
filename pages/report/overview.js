import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderReportsOverview() {

  loadCSS("/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/report/overview.css");

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

        ${menuItem("Dashboard", "/dashboard")}
        ${menuItem("Shipments", "/shipment")}
        ${menuItem("Fleet Management", "/fleet")}
        ${menuItem("Customers", "/customer")}
        ${menuItem("Compliance", "/compliance")}

        <!-- Reports Dropdown -->
        <div class="menu-group">

          <div
            class="menu-item active"
            id="reportsToggle"
          >
            Reports
          </div>

          <div
            class="submenu"
            id="reportsSubmenu"
          >

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

        <h1>Reports — Overview</h1>

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
            <h2>Reports Overview</h2>
            <p>
              Track operational performance
              and logistics metrics.
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
            "Total Revenue",
            "₱1.24M",
            "+8%",
            "green"
          )}

          ${statCard(
            "Fleet Utilization",
            "83%",
            "-0%",
            "gray"
          )}

        </div>

        <!-- Analytics Grid -->
        <div class="analytics-grid">

          <div class="chart-card">

            <div class="card-header">
              <h3>Shipment Volume</h3>
            </div>

            <div class="chart-placeholder">
              Chart Area
            </div>

          </div>

          <div class="chart-card">

            <div class="card-header">
              <h3>Revenue vs Target</h3>
            </div>

            <div class="chart-placeholder">
              Chart Area
            </div>

          </div>

        </div>

        <!-- Bottom Grid -->
        <div class="bottom-grid">

          <div class="info-card">
            <h3>Top Performing Drivers</h3>
          </div>

          <div class="info-card">
            <h3>Compliance Snapshot</h3>
          </div>

        </div>

      </section>

    </main>

  </div>
  `;

  attachOverviewEvents();
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

function attachOverviewEvents() {

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