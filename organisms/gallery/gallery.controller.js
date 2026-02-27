export class GalleryController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    const galleryData = await this.model.fetchAllGallery();
    galleryData.forEach(item => {
      const galleryNode = this.view.render(item);
      this.view.appendGalleryNode(galleryNode);
    });
  }
}