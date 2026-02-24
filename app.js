import { HeaderModel, HeaderView, HeaderController } from './molecules/header/index.js'

document.addEventListener('DOMContentLoaded', () => {

  const headerModel = new HeaderModel();
  const headerView = new HeaderView();
  new HeaderController(headerModel, headerView);
});