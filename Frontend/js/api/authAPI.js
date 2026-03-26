async function loginRequest(email, password) {
  const response = await fetch(`${API_URL_LOGIN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Credenciales incorrectas');
  }

  return response.json();
}