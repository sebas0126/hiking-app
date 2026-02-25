import { getRoutes } from '../../services/routes.service.js';

export class RoutesModel {
  async fetchAllRoutes() {
   return getRoutes();
  }
}