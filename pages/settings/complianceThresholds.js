import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderComplianceThresholds() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/settings/complianceThresholds.css"
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
        ${menuItem("Reports", "/report/overview")}

        <!-- Settings -->
        <div class="menu-group">

          <div class="menu-item active">
            Settings
          </div>

          <div class="submenu">

            <div
              class="submenu-item"
              data-path="/settings/account"
            >
              Account
            </div>

            <div
              class="submenu-item"
              data-path="/settings/notifications"
            >
              Notifications
            </div>

            <div
              class="submenu-item"
              data-path="/settings/pricing"
            >
              Pricing
            </div>

            <div
              class="submenu-item active"
              data-path="/settings/complianceThresholds"
            >
              Compliance Thresholds
            </div>

            <div
  class="submenu-item"
  data-path="/settings/userManagement"
>
  User Management
</div>

            <div class="submenu-item">
              Security
            </div>

          </div>

        </div>

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
          <button>🔔</button>
          <div class="avatar"></div>
        </div>

      </header>

      <!-- Content -->
      <section class="content">

        <!-- Header -->
        <div class="page-header">

          <div>

            <h2>
              Settings — Compliance Thresholds
            </h2>

            <p>
              Configure automated warnings
              for critical operational
              documents.
            </p>

          </div>

        </div>

        <!-- Main Card -->
        <div class="settings-card">

          <p class="intro-text">
            Configure warning lead times
            for driver and vehicle
            compliance documents.
          </p>

          <!-- Driver Docs -->
          <div class="section-block">

            <div class="section-title">
              DRIVER DOCUMENTATION
            </div>

            ${thresholdRow(
              "Driver’s License",
              "60",
              "15"
            )}

            ${thresholdRow(
              "Medical Certificate",
              "45",
              "10"
            )}

            ${thresholdRow(
              "NBI Clearance",
              "30",
              "7"
            )}

          </div>

          <!-- Vehicle Docs -->
          <div class="section-block">

            <div class="section-title">
              VEHICLE DOCUMENTATION
            </div>

            ${thresholdRow(
              "OR/CR",
              "45",
              "15"
            )}

            ${thresholdRow(
              "Insurance",
              "60",
              "15"
            )}

            ${thresholdRow(
              "LTFRB Permit",
              "60",
              "15"
            )}

            ${thresholdRow(
              "Emission Test",
              "21",
              "7"
            )}

            ${thresholdRow(
              "Maintenance Due",
              "14",
              "3"
            )}

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

function thresholdRow(name, first, critical) {

  return `
    <div class="threshold-row">

      <div class="threshold-info">

        <strong>${name}</strong>

      </div>

      <div class="threshold-inputs">

        <div class="input-wrap">

          <label>First Alert</label>

          <input
            type="text"
            value="${first}"
          />

          <span>days</span>

        </div>

        <div class="input-wrap">

          <label>Critical Alert</label>

          <input
            type="text"
            value="${critical}"
          />

          <span>days</span>

        </div>

      </div>

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