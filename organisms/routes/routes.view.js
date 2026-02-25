export class RoutesView {
  constructor(containerId) {
    this.rootContainer = document.getElementById(containerId);
  }

  appendRouteNode(routeNode) {
    this.rootContainer.appendChild(routeNode);
  }
}