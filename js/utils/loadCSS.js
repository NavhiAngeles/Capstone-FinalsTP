export function loadCSS(href) {
  // Remove existing page CSS
  const existing = document.getElementById("page-style");
  if (existing) existing.remove();

  // Create new link
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.id = "page-style";

  document.head.appendChild(link);
}