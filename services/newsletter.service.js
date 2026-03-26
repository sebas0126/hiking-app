import { API_HOSTNAME } from '../config.js';

export const subscribeToNewsletter = async (data) => {
  const response = await fetch(`${API_HOSTNAME}/api/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};