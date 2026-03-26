import { HeaderModel, HeaderView, HeaderController } from './molecules/header/index.js'
import { RoutesModel, RoutesView, RoutesController } from './organisms/routes/index.js'
import { GalleryModel, GalleryView, GalleryController } from './organisms/gallery/index.js'
import { NewsletterModel, NewsletterView, NewsletterController } from './organisms/newsletter/index.js'

document.addEventListener('DOMContentLoaded', async () => {

  const headerModel = new HeaderModel();
  const headerView = new HeaderView();
  new HeaderController(headerModel, headerView);

  const galleryModel = new GalleryModel();
  const galleryView = new GalleryView('gallery-container');
  new GalleryController(galleryModel, galleryView);

  const routesModel = new RoutesModel();
  const routesView = new RoutesView('routes-container');
  new RoutesController(routesModel, routesView);

  const newsletterModel = new NewsletterModel();
  const newsletterView = new NewsletterView();
  new NewsletterController(newsletterModel, newsletterView);
});