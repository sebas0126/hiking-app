import { updateRoute } from '../../services/routes.service.js';
import { toggleFavorite } from '../../services/routes.service.js';

export class RouteModel {
  constructor(routeData) {
    this.data = routeData;
  }

  async addComment(commentText) {
    const updatedRoute = await updateRoute(this.data.id, {
      newComment: {
        author: "Anonimo",
        text: commentText
      }
    });
    return updatedRoute.route.comments;
  }

  async toggleLike() {
    const updatedRoute = await updateRoute(this.data.id, {
      likes: this.data.isFavorite ? this.data.likes - 1 : this.data.likes + 1
    });
    this.data.likes = updatedRoute.route.likes;
    return updatedRoute.route.likes;
  }

  async toggleFavorite() {
    const updatedFavoriteIds = await toggleFavorite(this.data.id);
    this.data.isFavorite = !this.data.isFavorite;
    return updatedFavoriteIds;
  }
}