// userMiddleware.js
const {
    validateUserId,
    validateCreateUser,
    validateUpdateUser
} = require('./userValidator');

const validateUserIdMiddleware = (req, res, next) => {
    const errors = validateUserId(req.params.id);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

const validateCreateUserMiddleware = (req, res, next) => {
    const errors = validateCreateUser(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

const validateUpdateUserMiddleware = (req, res, next) => {
    const errors = validateUpdateUser(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

module.exports = {
    validateUserIdMiddleware,
    validateCreateUserMiddleware,
    validateUpdateUserMiddleware
};