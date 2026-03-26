async function fetchUsers() {
  const response = await fetch(API_URL_USERS, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener usuarios');
  }

  return response.json();
}