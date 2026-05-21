import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderSettingsNotifications() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/settings/notifications.css"
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
              class="submenu-item active"
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

            <div class="submenu-item">
              Compliance Thresholds
            </div>

            <div class="submenu-item">
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

            <h2>Settings — Notifications</h2>

            <p>
              Configure how and when you
              receive operational alerts.
            </p>

          </div>

        </div>

        <!-- Grid -->
        <div class="notification-grid">

          <!-- Delivery Channels -->
          <div class="settings-card">

            <div class="card-header">
              <h3>Delivery Channels</h3>
            </div>

            ${toggleItem(
              "Email Notifications",
              "Daily summaries and delayed reports",
              true
            )}

            ${toggleItem(
              "Push Notifications",
              "Real-time mobile alerts",
              true
            )}

            ${toggleItem(
              "SMS Alerts",
              "Reserved for critical alerts",
              false
            )}

          </div>

          <!-- Shipment Alerts -->
          <div class="settings-card wide">

            <div class="card-header">
              <h3>Shipment Alerts</h3>
            </div>

            ${alertRow(
              "Status Changes",
              "Shipment status updates"
            )}

            ${alertRow(
              "Off-Route Alert",
              "Vehicle route deviation"
            )}

            ${alertRow(
              "Cold Chain Alert",
              "Temperature issue detected"
            )}

          </div>

          <!-- Compliance -->
          <div class="settings-card">

            <div class="card-header">
              <h3>Compliance Alerts</h3>
            </div>

            ${toggleItem(
              "Document Expiry Warning",
              "Expiring within 30 days",
              true
            )}

            ${toggleItem(
              "Document Expired",
              "Already expired documents",
              true
            )}

            ${toggleItem(
              "Permit Expiration",
              "Vehicle permits warning",
              false
            )}

          </div>

          <!-- Fleet -->
          <div class="settings-card">

            <div class="card-header">
              <h3>Fleet Alerts</h3>
            </div>

            ${toggleItem(
              "Maintenance Due",
              "Scheduled service intervals",
              true
            )}

            ${toggleItem(
              "Vehicle Overdue",
              "Missed maintenance schedule",
              true
            )}

            ${toggleItem(
              "New Customer Booking",
              "Customer submitted booking",
              true
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

function toggleItem(title, desc, active) {

  return `
    <div class="toggle-row">

      <div>

        <strong>${title}</strong>
        <p>${desc}</p>

      </div>

      <div class="toggle ${active ? "active" : ""}">
        <div class="toggle-circle"></div>
      </div>

    </div>
  `;
}

function alertRow(title, desc) {

  return `
    <div class="alert-row">

      <div>

        <strong>${title}</strong>
        <p>${desc}</p>

      </div>

      <div class="alert-options">

        <label>
          <input type="checkbox" checked />
          EMAIL
        </label>

        <label>
          <input type="checkbox" checked />
          PUSH
        </label>

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