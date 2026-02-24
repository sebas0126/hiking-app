export const getRoutes = async () => {
  const response = await fetch('https://hiking-service.onrender.com/api/routes');
  return response.json();
};