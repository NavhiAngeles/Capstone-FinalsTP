import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderSettingsAccount() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/settings/account.css"
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
              class="submenu-item active"
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

            <div class="submenu-item">
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

            <h2>Settings — Account</h2>

            <p>
              Manage your personal details,
              contact information, and
              account preferences.
            </p>

          </div>

        </div>

        <!-- Grid -->
        <div class="settings-grid">

          <!-- Left -->
          <div class="left-column">

            <!-- Profile -->
            <div class="settings-card">

              <div class="card-header">
                <h3>Profile Information</h3>
              </div>

              <div class="profile-layout">

                <div class="avatar-box">
                  JD
                </div>

                <div class="profile-info">

                  <div class="info-group">
                    <label>FULL NAME</label>
                    <span>Juan dela Cruz</span>
                  </div>

                  <div class="info-group">
                    <label>EMAIL ADDRESS</label>
                    <span>
                      juan.delacruz@tanaw.ph
                    </span>
                  </div>

                  <div class="info-group">
                    <label>ROLE</label>

                    <div class="role-badge">
                      Super Admin
                    </div>
                  </div>

                </div>

                <div class="profile-info">

                  <div class="info-group">
                    <label>CONTACT NUMBER</label>
                    <span>0917 123 4567</span>
                  </div>

                </div>

              </div>

            </div>

            <!-- Password -->
            <div class="settings-card">

              <div class="card-header">

                <div>
                  <h3>Password & Authentication</h3>

                  <p>
                    Manage your password
                    to secure your account.
                  </p>
                </div>

              </div>

              <div class="password-grid">

                <div>
                  <label>PASSWORD STRENGTH</label>

                  <div class="strength-bar">
                    <div class="strength-fill"></div>
                  </div>

                  <span class="green">
                    Strong
                  </span>
                </div>

                <div>
                  <label>LAST CHANGED</label>
                  <span>30 days ago</span>
                </div>

                <div>
                  <label>STATUS</label>
                  <span class="green">
                    Secure
                  </span>
                </div>

              </div>

              <button class="primary-btn">
                Change Password
              </button>

            </div>

          </div>

          <!-- Right -->
          <div class="right-column">

            <!-- Login Security -->
            <div class="settings-card">

              <div class="card-header">
                <h3>Login & Security</h3>
              </div>

              <div class="security-box">

                <div class="recent-session">

                  <strong>
                    Today, 08:30 AM
                  </strong>

                  <span>
                    Chrome on Windows
                  </span>

                  <small>
                    Cabanatuan City
                  </small>

                </div>

              </div>

              <div class="session-box">

                <strong>
                  Safari on iPhone
                </strong>

                <span>
                  Yesterday, 10:15 PM
                </span>

              </div>

              <button class="logout-btn">
                Log Out All Other Sessions
              </button>

            </div>

            <!-- Account Details -->
            <div class="settings-card">

              <div class="card-header">
                <h3>Account Details</h3>
              </div>

              <div class="details-row">
                <span>Account ID:</span>
                <strong>ADM-0001</strong>
              </div>

              <div class="details-row">
                <span>Member Since:</span>
                <strong>Jan 15, 2025</strong>
              </div>

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