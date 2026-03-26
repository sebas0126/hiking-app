export class NewsletterView {
  constructor() {
    this.form = document.getElementById('newsletter-form');
    this.input = document.getElementById('newsletter-email');
    this.messageContainer = document.getElementById('newsletter-message');
  }

  getInputValue() {
    return this.input.value;
  }

  showMessage(text, isError = false) {
    this.messageContainer.textContent = text;
    this.messageContainer.style.color = isError ? 'red' : 'green';
    this.messageContainer.style.fontSize = '0.75rem';
  }

  clearMessage() {
    this.messageContainer.textContent = '';
  }

  clearInput() {
    this.input.value = '';
  }

  bindSubmit(handler) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      handler(this.getInputValue());
    });
  }
}