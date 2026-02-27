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

export const toggleFavorite = async (routeId) => {
  const userId = getUserId();

  try {
    const response = await fetch(`https://hiking-service.onrender.com/api/routes/${routeId}/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-user-id': userId
      }
    });

    const data = await response.json();
    return data.favoriteIds;
  } catch (error) {
    console.error('Error al guardar favorito:', error);
  }
};

export const getFavoriteRoutes = async () => {
  const userId = getUserId();
  const response = await fetch(`https://hiking-service.onrender.com/api/favorites`, {
    headers: {
      'x-user-id': userId
    }
  });
  return response.json();
};

const getUserId = () => {
  let userId = localStorage.getItem('hiking_app_user_id');
  if (!userId) {
    userId = 'user-' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('hiking_app_user_id', userId);
  }
  return userId;
}