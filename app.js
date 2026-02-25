import { HeaderModel, HeaderView, HeaderController } from './molecules/header/index.js'
import { RoutesModel, RoutesView, RoutesController } from './organisms/routes/index.js'

document.addEventListener('DOMContentLoaded', async () => {

  const headerModel = new HeaderModel();
  const headerView = new HeaderView();
  new HeaderController(headerModel, headerView);

  const routesModel = new RoutesModel();
  const routesView = new RoutesView('routes-container');
  new RoutesController(routesModel, routesView);
});