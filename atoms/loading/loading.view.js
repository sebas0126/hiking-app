export class LoadingView {
  constructor(containerId) {
    this.template = document.getElementById('loading-template');
    this.container = document.getElementById(containerId);
  }

  render() {
    const loadingNode = this.template.content.cloneNode(true);
    return loadingNode;
  }

  showLoading() {
    const loadingNode = this.render();
    this.container.appendChild(loadingNode);
  }

  hideLoading() {
    const loadingNode = this.container.querySelector('.loading-altivok');
    if (loadingNode) {
      loadingNode.remove();
    }
  }
}