import { subscribeToNewsletter } from '../../services/newsletter.service.js';

export class NewsletterModel {
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async subscribe(email) {
    const data = { email };
    const response = await subscribeToNewsletter(data);
    return response;
  }
}