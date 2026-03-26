// authMiddleware.js

const { validateLogin } = require('./authValidator');

const validateLoginMiddleware = (req, res, next) => {
    const errors = validateLogin(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

module.exports = { validateLoginMiddleware };