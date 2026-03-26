const express = require('express');
const router = express.Router();

const controller = require('./teacherController');
const { verifyToken } = require('../../middlewares/authMiddlewares');
const { authorizeRole } = require('../../middlewares/roleMiddlewares');

const {
    validateCreateTeacherMiddleware, 
    validateUpdateTeacherMiddleware,
    validateTeacherIdMiddleware
} = require('./teacherMiddleware');


// Crear teacher
router.post(
    '/',
    verifyToken,
    authorizeRole('admin'),
    validateCreateTeacherMiddleware,
    controller.createTeacher
);

// Obtener todos los teachers
router.get(
    '/',
    verifyToken,
    authorizeRole('admin', 'teacher'),
    controller.getTeachers
);

// Obtener teacher por ID
router.get(
    '/:id',
    verifyToken,
    authorizeRole('admin', 'teacher'),
    validateTeacherIdMiddleware,
    controller.getTeacherById
);

// Actualizar teacher
router.put(
    '/:id',
    verifyToken,
    authorizeRole('admin'),
    validateTeacherIdMiddleware,
    validateUpdateTeacherMiddleware,
    controller.updateTeacher
);

// Eliminar teacher
router.delete(
    '/:id',
    verifyToken,
    authorizeRole('admin'),
    validateTeacherIdMiddleware,
    controller.deleteTeacher
);

module.exports = router;