const express = require('express');
const router = express.Router();

const controller = require('./authController');
const { validateLoginMiddleware } = require('./authMiddleware');

router.post(
    '/login',
    validateLoginMiddleware,
    controller.login
);

module.exports = router;