export class HeaderView {
  constructor() {
    this.menuButton = document.querySelector('#menu-button');
    this.navList = document.querySelector('.header-nav-list');
  }

  bindToggleMenu(handler) {
    this.menuButton.addEventListener('click', () => {
      handler();
    });
  }

  bindClickOutside(handler) {
    document.addEventListener('click', (event) => {
      const isClickOnButton = this.menuButton.contains(event.target);
      if (!isClickOnButton) {
        handler();
      }
    });
  }

  updateMenuState(isMenuOpen) {
    if (isMenuOpen) {
      this.menuButton.setAttribute('aria-expanded', 'true');
      this.navList.classList.add('header-nav-list--menu-open');
    } else {
      this.menuButton.setAttribute('aria-expanded', 'false');
      this.navList.classList.remove('header-nav-list--menu-open');
    }
  }
}