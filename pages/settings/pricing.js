import { loadCSS } from "../../js/utils/loadCSS.js";
import { navigate } from "../../js/utils/navigate.js";

export function renderSettingsPricing() {

  loadCSS(
    "/MABUTOL-TRUCKING-MAIN%20ORIGINAL/css/settings/pricing.css"
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
              class="submenu-item active"
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

        <!-- Notice -->
        <div class="notice-box">

          <strong>
            ⚠ Super Admin Notice
          </strong>

          <p>
            Pricing & rates can only be modified
            by Super Admin accounts.
          </p>

        </div>

        <!-- Header -->
        <div class="page-header">

          <div>

            <h2>Settings — Pricing & Rates</h2>

            <p>
              Configure base rates,
              weight tiers, surcharges,
              and toll fee presets.
            </p>

          </div>

        </div>

        <!-- Grid -->
        <div class="pricing-grid">

          <!-- Left -->
          <div class="left-column">

            <!-- Fixed Fees -->
            <div class="settings-card">

              <div class="card-header">
                <h3>Fixed Trip Fees</h3>
              </div>

              <p class="card-desc">
                Flat fees automatically applied
                to every shipment.
              </p>

              <div class="form-grid">

                <div class="input-group">

                  <label>
                    MINIMUM BOOKING FEE
                  </label>

                  <input
                    type="text"
                    value="₱ 2500.00"
                  />

                </div>

                <div class="input-group">

                  <label>
                    DRIVER ALLOWANCE
                  </label>

                  <input
                    type="text"
                    value="₱ 500.00"
                  />

                </div>

              </div>

            </div>

            <!-- Surcharges -->
            <div class="settings-card">

              <div class="card-header">
                <h3>
                  Special Handling Surcharges
                </h3>
              </div>

              <table class="pricing-table">

                <thead>

                  <tr>
                    <th>Handling Type</th>
                    <th>Surcharge</th>
                    <th>Applied As</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Fragile</td>
                    <td>
                      <input
                        type="text"
                        value="₱ 500"
                      />
                    </td>
                    <td>Flat Fee</td>
                  </tr>

                  <tr>
                    <td>Keep Dry</td>
                    <td>
                      <input
                        type="text"
                        value="₱ 300"
                      />
                    </td>
                    <td>Per Trip</td>
                  </tr>

                  <tr>
                    <td>Oversized</td>
                    <td>
                      <input
                        type="text"
                        value="₱ 1200"
                      />
                    </td>
                    <td>Flat Fee</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          <!-- Right -->
          <div class="right-column">

            <div class="settings-card">

              <div class="card-header">
                <h3>
                  Base Rate per Vehicle Type
                </h3>
              </div>

              <table class="pricing-table">

                <thead>

                  <tr>
                    <th>Vehicle Type</th>
                    <th>Capacity</th>
                    <th>Rate / KM</th>
                  </tr>

                </thead>

                <tbody>

                  ${vehicleRow(
                    "6-Wheeler Dropside",
                    "Up to 5,000 kg",
                    "55"
                  )}

                  ${vehicleRow(
                    "6-Wheeler Closed Van",
                    "Up to 5,000 kg",
                    "65"
                  )}

                  ${vehicleRow(
                    "10-Wheeler Wing Van",
                    "Up to 15,000 kg",
                    "85"
                  )}

                  ${vehicleRow(
                    "10-Wheeler Flatbed",
                    "Up to 12,000 kg",
                    "80"
                  )}

                  ${vehicleRow(
                    "Boom Truck",
                    "Up to 10,000 kg",
                    "95"
                  )}

                </tbody>

              </table>

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

function vehicleRow(name, cap, rate) {

  return `
    <tr>

      <td>${name}</td>

      <td>${cap}</td>

      <td>
        <input
          type="text"
          value="${rate}.00"
        />
      </td>

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