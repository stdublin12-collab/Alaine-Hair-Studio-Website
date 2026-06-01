document.documentElement.classList.remove('no-js');

const header = document.querySelector('[data-site-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menuClose = document.querySelector('[data-menu-close]');
const menuOverlay = document.querySelector('[data-menu-overlay]');

if (header && menuButton) {
  const setMenuOpen = (isOpen) => {
    header.classList.toggle('is-open', isOpen);
    document.documentElement.classList.toggle('menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  };

  menuButton.addEventListener('click', () => setMenuOpen(!header.classList.contains('is-open')));
  menuClose?.addEventListener('click', () => setMenuOpen(false));
  menuOverlay?.addEventListener('click', () => setMenuOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
}
