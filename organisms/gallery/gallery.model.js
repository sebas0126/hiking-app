import { getGallery } from '../../services/gallery.service.js';

export class GalleryModel {
  
  async fetchAllGallery() {
    return getGallery();
  }
}