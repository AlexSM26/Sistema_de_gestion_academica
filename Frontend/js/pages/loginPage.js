document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const data = await loginRequest(email, password);
      setToken(data.token);
      window.location.href = 'admin.html';
    } catch (err) {
      document.getElementById('login-error').textContent = err.message;
    }
  });
});