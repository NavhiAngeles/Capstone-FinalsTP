import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderSecuritySettings() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/settings/security.css"
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
              class="submenu-item"
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

            <div
              class="submenu-item active"
              data-path="/settings/security"
            >
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

            <h2>Settings — Security</h2>

            <p>
              Configure authentication methods,
              active sessions, and login activity.
            </p>

          </div>

        </div>

        <!-- Authentication -->
        <div class="settings-card">

          <div class="card-header">
            <h3>Authentication</h3>
          </div>

          <div class="security-row">

            <div>

              <strong>Password</strong>

              <p>Last updated 45 days ago.</p>

            </div>

            <button class="primary-btn">
              Update Password
            </button>

          </div>

          <div class="security-row">

            <div>

              <strong>
                Two-Factor Authentication (2FA)
              </strong>

              <p>
                Require an extra security step.
              </p>

            </div>

            <div class="toggle active">
              <div class="toggle-circle"></div>
            </div>

          </div>

        </div>

        <!-- Sessions -->
        <div class="settings-card">

          <div class="card-header sessions-header">

            <h3>Active Sessions</h3>

            <button class="danger-btn">
              TERMINATE ALL
            </button>

          </div>

          <table class="session-table">

            <thead>

              <tr>
                <th>Device</th>
                <th>Location / IP</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>MacBook Pro 16"</td>

                <td>
                  Seattle, WA
                  <br />
                  <small>192.168.1.45</small>
                </td>

                <td>
                  <span class="status current">
                    Current Session
                  </span>
                </td>

                <td>-</td>

              </tr>

              <tr>

                <td>iPhone 14 Pro</td>

                <td>
                  Portland, OR
                  <br />
                  <small>16.0.8.12</small>
                </td>

                <td>
                  <span class="inactive">
                    Last active 2 hrs ago
                  </span>
                </td>

                <td>
                  <button class="revoke-btn">
                    REVOKE
                  </button>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        <!-- Activity -->
        <div class="settings-card">

          <div class="card-header">
            <h3>Recent Login Activity</h3>
          </div>

          <div class="activity-list">

            <div class="activity-item success">

              <div>

                <strong>
                  Successful Login
                </strong>

                <p>
                  IP: 192.168.1.45 • Seattle, WA
                </p>

              </div>

              <span>TODAY, 08:42 AM</span>

            </div>

            <div class="activity-item failed">

              <div>

                <strong>
                  Failed Login Attempt
                </strong>

                <p>
                  IP: 45.22.80.44 • Unknown Location
                </p>

              </div>

              <span>YESTERDAY, 11:20 PM</span>

            </div>

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