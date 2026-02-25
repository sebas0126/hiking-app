export class RouteModel {
  constructor(routeData) {
    this.data = routeData;
  }

  async addComment(commentText) {
    console.log("Enviando comentario al servidor...");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newComment = {
          author: "Usuario Logueado",
          text: commentText,
          date: new Date().toLocaleDateString('es-ES', {
            day: '2-digit', month: '2-digit', year: 'numeric'
          })
        };

        this.data.comments.push(newComment);

        resolve(this.data.comments);
      }, 500);
    });
  }
}