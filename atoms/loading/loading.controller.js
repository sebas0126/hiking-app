export class LoadingController {
  constructor(view) {
    this.view = view;
  }

  showLoading() {
    this.view.showLoading();
  }

  hideLoading() {
    this.view.hideLoading();
  }
}