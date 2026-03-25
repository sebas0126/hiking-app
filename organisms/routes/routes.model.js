import { getRoutes } from '../../services/routes.service.js';
import { getFavoriteRoutes } from '../../services/routes.service.js';

export class RoutesModel {
  async fetchAllRoutes() {
   return getRoutes();
  }
  async fetchFavoriteRoutes() {
    return getFavoriteRoutes();
  }
}