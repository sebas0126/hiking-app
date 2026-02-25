export class RouteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddComment(this.handleAddComment.bind(this));
  }

  getViewNode() {
    return this.view.render(this.model.data);
  }

  async handleAddComment(newCommentText) {
    try {
      const updatedCommentsList = await this.model.addComment(newCommentText);

      this.view.updateComments(updatedCommentsList);

    } catch (error) {
      console.error("Hubo un error al guardar el comentario:", error);
    }
  }
}