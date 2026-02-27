import { LoadingView } from '../../atoms/loading/loading.view.js';
import { LoadingController } from '../../atoms/loading/loading.controller.js';

export class RoutesView {
  constructor(containerId) {
    this.rootContainer = document.getElementById(containerId);
    this.loadingView = new LoadingView(containerId);
    this.loadingController = new LoadingController(this.loadingView);
  }

  showLoading() {
    this.loadingController.showLoading();
  }

  hideLoading() {
    this.loadingController.hideLoading();
  }

  appendRouteNode(routeNode) {
    this.rootContainer.appendChild(routeNode);
  }
}