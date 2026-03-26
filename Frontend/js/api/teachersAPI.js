async function fetchTeachers() {
  const response = await fetch(API_URL_TEACHERS, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener profesores');
  }

  return response.json();
}

