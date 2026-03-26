async function fetchStudents() {
  const response = await fetch(API_URL_STUDENTS, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener estudiantes');
  }

  return response.json();
}

