import { HeaderModel, HeaderView, HeaderController } from './molecules/header/index.js'
import { getRoutes } from './services/routes.service.js'

document.addEventListener('DOMContentLoaded', async () => {

  const headerModel = new HeaderModel();
  const headerView = new HeaderView();
  new HeaderController(headerModel, headerView);
});