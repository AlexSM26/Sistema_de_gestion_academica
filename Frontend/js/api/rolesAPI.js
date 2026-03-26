async function fetchRoles() {
  const response = await fetch(API_URL_ROL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener roles');
  }

  return response.json();
}