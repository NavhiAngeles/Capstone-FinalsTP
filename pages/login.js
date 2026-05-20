import { navigate } from "../js/utils/navigate.js";
import { loadCSS } from "../js/utils/loadCSS.js";

export function renderLogin() {

  loadCSS("./css/login.css");
  const app = document.getElementById("app");

  app.innerHTML = `

    <div class="login-page">
    <div class="overlay"></div>

    <main class="container">
      
      <div class="branding">
        <div class="logo"></div>
        <h1>Mabutol Tracking</h1>
        <p class="subtitle">MABUTOL TRACKING & LOGISTICS</p>
      </div>

      <section class="card">
        <header class="card-header">
          <h2>Secure Access</h2>
          <p>Authenticate to manage fleet operations.</p>
        </header>

        <form id="loginForm">
          
          <div class="form-group">
            <label>CORPORATE EMAIL</label>
            <input type="email" id="email" placeholder="name@company.com" />
          </div>

          <div class="form-group">
            <div class="label-row">
              <label>SECURITY KEY</label>
              <a href="#" class="forgot">Forgot Access?</a>
            </div>
            <input type="password" id="password" placeholder="••••••••" />
          </div>

          <button type="submit" class="btn-primary">
            Sign In →
          </button>

          <div class="divider">
            <span>OR IDENTIFY PROVIDER</span>
          </div>

          <div class="oauth">
            <button type="button" class="btn-oauth">Google</button>
            <button type="button" class="btn-oauth">Azure AD</button>
          </div>

        </form>
      </section>

    </main>
    </div>
  `;

  attachLoginEvents();
}

function attachLoginEvents() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Enter a valid corporate email.");
      return;
    }
    
    alert("Login successful (demo only).");
    
    navigate("/dashboard");
    
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
