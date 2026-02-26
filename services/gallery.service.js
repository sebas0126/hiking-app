export const getGallery = async () => {
  const response = await fetch('https://hiking-service.onrender.com/api/gallery');
  return response.json();
};