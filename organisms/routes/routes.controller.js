import { RouteModel } from '../route/route.model.js';
import { RouteView } from '../route/route.view.js';
import { RouteController } from '../route/route.controller.js';

export class RoutesController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    const routesData = await this.model.fetchAllRoutes();

    routesData.forEach(data => {
      const childModel = new RouteModel(data);
      const childView = new RouteView();
      const childController = new RouteController(childModel, childView);

      const childNode = childController.getViewNode();
      this.view.appendRouteNode(childNode);
    });
  }
}