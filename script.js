// Solo navegación móvil y año del pie. Las tarifas y preguntas usan <details>.
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.getElementById('primary-nav');
const menuLabel = document.querySelector('[data-menu-label]');
const mobileLayout = window.matchMedia('(max-width: 940px)');

function setMenu(open, restoreFocus = false) {
  navToggle.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Close' : 'Menu';
  if (restoreFocus) navToggle.focus();
}

navToggle.hidden = false;
navToggle.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false, true);
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) setMenu(false);
});
mobileLayout.addEventListener('change', () => setMenu(false));
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
