async function loadStudents() { 
  const students = await fetchStudents();
  const list = document.getElementById('student-list');
  list.innerHTML = '';

  students.forEach(student => {
    const li = document.createElement('li');
    li.classList.add('student-item');

    li.innerHTML = `
      <div class="student-field">
        <span class="field-title">Nombre:</span>
        <span class="field-value">${student.name}</span>
      </div>
      <div class="student-field">
        <span class="field-title">Correo:</span>
        <span class="field-value">${student.email}</span>
      </div>
      <div class="student-field">
        <span class="field-title">Fecha de matrícula:</span>
        <span class="field-value">${student.enrollment_date}</span>
      </div>
    `;

    list.appendChild(li);
  });
}

async function loadUsers() {
  const users = await fetchUsers();
  const list = document.getElementById('user-list');
  list.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.classList.add('student-item'); // reutilizamos la clase para estilo consistente

    li.innerHTML = `
      <div class="student-field">
        <span class="field-title">Nombre:</span>
        <span class="field-value">${user.name} - ${user.id}</span>
      </div>
      <div class="student-field">
        <span class="field-title">Email:</span>
        <span class="field-value">${user.email}</span>
      </div>
      <div class="student-field">
        <span class="field-title">Contraseña:</span>
        <span class="field-value">${user.password}</span>
      </div>
    `;

    list.appendChild(li);
  });
}

async function loadRoles() {
  const roles = await fetchRoles();
  const list = document.getElementById('rol-list');
  list.innerHTML = '';

  roles.forEach(role => {
    const li = document.createElement('li');
    li.textContent = role.name;
    list.appendChild(li);
  });
}

async function loadTeachers() {
  const teachers = await fetchTeachers();
  const list = document.getElementById('teacher-list');
  list.innerHTML = '';

  teachers.forEach(teacher => {
    const li = document.createElement('li');
    li.classList.add('student-item')
    
    li.innerHTML = `
      <div class="student-field">
        <span class="field-title">Nombre:</span>
        <span class="field-value">${teacher.name}</span>
      </div>
      <div class="student-field">
        <span class="field-title">Email:</span>
        <span class="field-value">${teacher.email}</span>
      </div>
      <div class="student-field">
        <span class="field-title">Especialidad:</span>
        <span class="field-value">${teacher.specialty}</span>
      </div>
    `;

    list.appendChild(li);
  });
}
  