import { API_HOSTNAME } from '../config.js';

export const getGallery = async () => {
  const response = await fetch(`${API_HOSTNAME}/api/gallery`);
  return response.json();
};