import { LoadingView } from '../../atoms/loading/loading.view.js';
import { LoadingController } from '../../atoms/loading/loading.controller.js';

export class GalleryView {
  constructor(containerId) {
    this.rootContainer = document.getElementById(containerId);
    this.template = document.getElementById('gallery-template');

    this.loadingView = new LoadingView(containerId);
    this.loadingController = new LoadingController(this.loadingView);
  }

  render(galleryData) {
    const clone = this.template.content.cloneNode(true);
    const galleryEl = clone.querySelector('.gallery-item');
    if (galleryEl) galleryEl.id = `gallery-${galleryData.id}-item`;
    galleryEl.querySelector('a').href = `#route-${galleryData.id}-section`;
    galleryEl.querySelector('.gallery-image').src = galleryData.image;
    galleryEl.querySelector('.gallery-image').alt = galleryData.title;
    return clone;
  }

  appendGalleryNode(galleryNode) {
    this.rootContainer.appendChild(galleryNode);
  }

  showLoading() {
    this.loadingController.showLoading();
  }

  hideLoading() {
    this.loadingController.hideLoading();
  }
}