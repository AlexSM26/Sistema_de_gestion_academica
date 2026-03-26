const express = require('express');
const router = express.Router();

const controller = require('./userController');
const { verifyToken } = require('../../middlewares/authMiddlewares');
const { authorizeRole } = require('../../middlewares/roleMiddlewares');

const {
    validateUserIdMiddleware,
    validateCreateUserMiddleware,
    validateUpdateUserMiddleware
} = require('./userMiddlewares');

router.post(
    '/',
    verifyToken,
    authorizeRole('admin'),
    validateCreateUserMiddleware,
    controller.createUser
);

router.get(
    '/',
    verifyToken,
    authorizeRole('admin', 'teacher'),
    controller.getUsers
);

router.get(
    '/:id',
    verifyToken,
    authorizeRole('admin', 'teacher'),
    validateUserIdMiddleware,
    controller.getUserById
);

router.put(
    '/:id',
    verifyToken,
    authorizeRole('admin'),
    validateUserIdMiddleware,
    validateUpdateUserMiddleware,
    controller.updateUser
);

router.delete(
    '/:id',
    verifyToken,
    authorizeRole('admin'),
    validateUserIdMiddleware,
    controller.deleteUser
);

module.exports = router;