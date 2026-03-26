document.addEventListener('DOMContentLoaded', () => {
  const token = getToken();

  if (location.pathname.endsWith('index.html')) {
    if (token) window.location.href = 'admin.html';
    return;
  }

  if (location.pathname.endsWith('admin.html')) {
    if (!token) {
      window.location.href = 'index.html';
      return;
    }

    loadUsers();
    loadRoles();
    loadStudents();
    loadTeachers();
  }
});