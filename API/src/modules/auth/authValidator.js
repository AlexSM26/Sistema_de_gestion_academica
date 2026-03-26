// authValidator.js

const validateLogin = (data) => {
    const errors = [];

    if (!data.email || !data.email.includes('@')) {
        errors.push('Email inválido');
    }

    if (!data.password || data.password.length < 6) {
        errors.push('Contraseña inválidaaaa');
    }

    return errors;
};

module.exports = { validateLogin };