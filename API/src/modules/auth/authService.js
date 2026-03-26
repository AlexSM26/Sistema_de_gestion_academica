const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../users/userModel');

const login = async ({ email, password }) => {
    const user = await UserModel.getUserByEmail(email);

    if (!user) {
        const error = new Error('Credenciales inválidas');
        error.status = 401;
        throw error;
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        const error = new Error('Credenciales inválidas');
        error.status = 401;
        throw error;
    }

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return token;
};

module.exports = { login };