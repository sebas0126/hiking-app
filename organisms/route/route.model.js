import { updateRoute } from '../../services/routes.service.js';
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
}