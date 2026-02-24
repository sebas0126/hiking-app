export class HeaderController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindToggleMenu(this.handleToggleMenu.bind(this));
  }

  handleToggleMenu() {
    const isMenuOpen = this.model.toggleMenu();
    this.view.updateMenuState(isMenuOpen);
  }
}