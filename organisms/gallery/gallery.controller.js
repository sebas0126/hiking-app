export class GalleryController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    this.view.showLoading();
    const galleryData = await this.model.fetchAllGallery();
    this.view.hideLoading();

    galleryData.forEach(item => {
      const galleryNode = this.view.render(item);
      this.view.appendGalleryNode(galleryNode);
    });
  }
}