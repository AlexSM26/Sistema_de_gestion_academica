const express = require('express');
const cors = require('cors');



const userRoutes = require('./src/modules/users/userRoutes');
const teacherRoutes = require('./src/modules/teachers/teacherRoutes');
const authRoutes = require('./src/modules/auth/authRoutes');
const errorHandler = require('./src/middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json())

//rutas
app.use('/api/users', userRoutes);
app.use('/api/teachers', teacherRoutes)
app.use('/api/auth', authRoutes);



// Ruta base
app.get('/', (req, res) => {
  res.json({ message: 'API Sistema Gestión Académica funcionando' });
});

// Manejo de rutas inexistentes
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Middleware global de errores
app.use(errorHandler);

module.exports = app;