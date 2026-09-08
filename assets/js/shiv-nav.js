document.addEventListener("DOMContentLoaded", () => {
  const icons = {
    home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-9Z"/><path d="M9 21v-6h6v6"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
    education: '<path d="m2.5 9.5 9.5-5 9.5 5-9.5 5-9.5-5Z"/><path d="M6.5 12v4.5c3.2 2 7.8 2 11 0V12"/><path d="M21.5 10v6"/>',
    works: '<rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2"/>',
    contact: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'
  };
  const tabs = [
    ["index.html", "home", "Home"],
    ["about.html", "user", "About"],
    ["education.html", "education", "Education"],
    ["works.html", "works", "Works"],
    ["contact.html", "contact", "Contact"]
  ];
  const current = location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector(".header-three");
  if (!header) return;

  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
  const links = (className) => tabs.map(([href, name, label]) => `
    <a href="${href}" class="${href === current ? "active" : ""}">
      ${icon(name)}<span>${label}</span>
    </a>`).join("");
  const host = header.querySelector(".d-flex.align-items-center.justify-content-between");

  if (host && !host.querySelector(".shiv-tabs")) {
    const desktopNav = document.createElement("nav");
    desktopNav.className = "shiv-tabs";
    desktopNav.setAttribute("aria-label", "Portfolio navigation");
    desktopNav.innerHTML = links("");
    host.append(desktopNav);
  }

  if (!host || document.querySelector(".shiv-menu-toggle")) return;

  const toggle = document.createElement("button");
  toggle.className = "shiv-menu-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Open navigation menu");
  toggle.setAttribute("aria-controls", "shiv-mobile-sidebar");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  host.append(toggle);

  const overlay = document.createElement("div");
  overlay.className = "shiv-sidebar-overlay";
  overlay.setAttribute("aria-hidden", "true");

  const sidebar = document.createElement("aside");
  sidebar.id = "shiv-mobile-sidebar";
  sidebar.className = "shiv-sidebar";
  sidebar.setAttribute("aria-label", "Mobile navigation");
  sidebar.setAttribute("aria-hidden", "true");
  sidebar.innerHTML = `
    <div class="shiv-sidebar__top">
      <span class="shiv-sidebar__brand">SHIV YADAV</span>
      <button class="shiv-sidebar__close" type="button" aria-label="Close navigation menu">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <nav class="shiv-sidebar__nav" aria-label="Portfolio navigation">${links("")}</nav>
    <div class="shiv-sidebar__footer">
      <p>Technology, business and creative digital work.</p>
      <a class="shiv-sidebar__contact" href="contact.html">GET IN TOUCH</a>
    </div>`;
  document.body.append(overlay, sidebar);

  const closeButton = sidebar.querySelector(".shiv-sidebar__close");
  let lastFocused = null;
  const isOpen = () => sidebar.classList.contains("is-open");
  const openMenu = () => {
    lastFocused = document.activeElement;
    overlay.classList.add("is-open");
    sidebar.classList.add("is-open");
    sidebar.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("shiv-menu-open");
    closeButton.focus();
  };
  const closeMenu = () => {
    if (!isOpen()) return;
    overlay.classList.remove("is-open");
    sidebar.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("shiv-menu-open");
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  toggle.addEventListener("click", () => (isOpen() ? closeMenu() : openMenu()));
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  sidebar.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...sidebar.querySelectorAll('a, button:not([disabled])')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const compactLayout = window.matchMedia("(min-width: 768px)");
  const resetForDesktop = () => {
    if (compactLayout.matches) closeMenu();
  };
  if (compactLayout.addEventListener) compactLayout.addEventListener("change", resetForDesktop);
  else compactLayout.addListener(resetForDesktop);

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
});
