export const getRoutes = async () => {
  const response = await fetch('https://hiking-service.onrender.com/api/routes');
  return response.json();
};

export const updateRoute = async (id, data) => {
  const response = await fetch(`https://hiking-service.onrender.com/api/routes/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};