import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderUserManagement() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/settings/userManagement.css"
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
              class="submenu-item active"
              data-path="/settings/userManagement"
            >
              User Management
            </div>

            <div
  class="submenu-item"
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

            <h2>
              Settings — User Management
            </h2>

            <p>
              Add, edit, and control
              access levels for users.
            </p>

          </div>

          <div class="header-actions">

            <button class="secondary-btn">
              Role Permission Summary
            </button>

            <button class="primary-btn">
              + Add Admin User
            </button>

          </div>

        </div>

        <!-- Search -->
        <div class="search-row">

          <input
            type="text"
            placeholder="Search by name or email..."
          />

          <button class="secondary-btn">
            Filter
          </button>

        </div>

        <!-- Table -->
        <div class="table-card">

          <table class="user-table">

            <thead>

              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Permissions</th>
                <th>Last Login</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              ${userRow(
                "Juan dela Cruz",
                "juan.admin@tanaw.ph",
                "Super Admin",
                "Full Access",
                "Oct 24, 08:30 AM",
                "Active"
              )}

              ${userRow(
                "Maria Santos",
                "maria@tanaw.ph",
                "Super Admin",
                "Full Access",
                "Oct 23, 02:15 PM",
                "Active"
              )}

              ${userRow(
                "Ricardo Mendoza",
                "ricardo@tanaw.ph",
                "Staff",
                "Dashboard, Reports",
                "Oct 20, 09:00 AM",
                "Inactive"
              )}

              ${userRow(
                "Elena Reyes",
                "elena@tanaw.ph",
                "Staff",
                "Fleet, Customers",
                "Never",
                "Pending"
              )}

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

function userRow(
  name,
  email,
  role,
  permissions,
  login,
  status
) {

  return `
    <tr>

      <td>

        <div class="user-cell">

          <div class="user-avatar">
            ${name.charAt(0)}
          </div>

          <div>

            <strong>${name}</strong>

            <p>${email}</p>

          </div>

        </div>

      </td>

      <td>
        <span class="role-badge">
          ${role}
        </span>
      </td>

      <td>${permissions}</td>

      <td>${login}</td>

      <td>
        <span class="status ${status.toLowerCase()}">
          ${status}
        </span>
      </td>

      <td>⋮</td>

    </tr>
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