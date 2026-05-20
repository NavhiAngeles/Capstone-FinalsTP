import { router } from "../main.js";

const BASE = "/" + window.location.pathname.split("/")[1];

export function navigate(path) {
  window.history.pushState({}, "", BASE + path);
  router();
}