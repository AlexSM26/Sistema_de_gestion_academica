const AuthService = require('./authService');

const login = async (req, res, next) => {
    try {
        const token = await AuthService.login(req.body);

        res.json({
            success: true,
            token
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { login };