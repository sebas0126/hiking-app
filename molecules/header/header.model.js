export class HeaderModel {
  constructor() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    return this.isMenuOpen;
  }
}