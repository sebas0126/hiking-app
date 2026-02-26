export class HeaderController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindToggleMenu(this.handleToggleMenu.bind(this));
    this.view.bindClickOutside(this.handleClickOutside.bind(this));
  }

  handleToggleMenu() {
    const isMenuOpen = this.model.toggleMenu();
    this.view.updateMenuState(isMenuOpen);
  }

  handleClickOutside() {
    const didClose = this.model.closeMenu();
    if (didClose) {
      this.view.updateMenuState(false);
    }
  }
}