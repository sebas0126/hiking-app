export class NewsletterController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindSubmit(this.handleSubscribe.bind(this));
  }

  async handleSubscribe(email) {
    if (this.model.isValidEmail(email)) {
      try {
        await this.model.subscribe(email);
        this.view.showMessage("¡Gracias por suscribirte!", false);
        this.view.clearInput();
        setTimeout(() => {
          this.view.clearMessage();
        }, 5000);
      } catch (error) {
        this.view.showMessage("Hubo un error al suscribirte. Por favor, intenta nuevamente más tarde.", true);
        console.error("Error al suscribirse al newsletter:", error);
      }
    } else {
      this.view.showMessage("Por favor, ingresa un correo válido.", true);
    }
  }
}