import { renderLogin } from "../pages/login.js";
import { renderDashboard } from "../pages/dashboard.js";
import { renderShipment } from "../pages/shipment.js";
import { renderFleet } from "../pages/fleet.js";
import { renderCustomer } from "../pages/customer.js";
import { renderCompliance } from "../pages/compliance.js";
import { renderReportsOverview } from "../pages/report/overview.js";
import { renderReportsShipments } from "../pages/report/shipmentReport.js";
import { renderDriverReport } from "../pages/report/driverReport.js";
import { renderRevenueReport } from "../pages/report/revenueReport.js";
import { renderSettingsAccount } from "../pages/settings/account.js";
import { renderSettingsNotifications } from "../pages/settings/notifications.js";
import { renderSettingsPricing } from "../pages/settings/pricing.js";

const BASE = "/" + window.location.pathname.split("/")[1];

export function router() {
  let path = window.location.pathname;

  console.log("PATH:", path);

  // Remove project base (important for localhost)

  if (path.startsWith(BASE)) {
    path = path.replace(BASE, "");
  }

  // Normalize
  if (path === "" || path === "/" || path === "/index.html") {
    renderLogin();
    return;
  }

  if (path === "/login") {
    renderLogin();
    return;
  }

  if (path === "/dashboard") {
    renderDashboard();
    return;
  }

  if (path === "/shipment") {
    renderShipment();
    return;
  }

  if (path === "/fleet") {
  renderFleet();
  return;
  }

  if (path === "/customer") {
    renderCustomer();
    return;
  }

  if (path === "/compliance") {
    renderCompliance();
    return;
  }

  // Reports
  if (path === "/report/overview") {
  renderReportsOverview();
  return;
  }

  if (path === "/report/shipmentReport") {
    renderReportsShipments();
    return;
  }

  if (path === "/report/driverReport") {
  renderDriverReport();
  return;
  }

  if (path === "/report/revenueReport") {
    renderRevenueReport();
  return;
  }

  // Settings
  if (path === "/settings/account") {
  renderSettingsAccount();
  return;
  }

  if (path === "/settings/notifications") {
  renderSettingsNotifications();
  return;
  } 

  if (path === "/settings/pricing") {
  renderSettingsPricing();
  return;
  }

  // fallback
  renderLogin();
}

// Initial load
window.addEventListener("DOMContentLoaded", router);

// Back/forward buttons
window.addEventListener("popstate", router);