const validateUserId = (id) => {
    const errors = [];

    if (!id || isNaN(id) || Number(id) <= 0) {
        errors.push('ID inválido');
    }

    return errors;
};

const validateCreateUser = (data) => {
    const errors = [];

    if (!data.name || data.name.length < 3)
        errors.push('Nombre inválido');

    if (!data.email || !data.email.includes('@'))
        errors.push('Email inválido');

    if (!data.password || data.password.length < 6) {
        errors.push('Contraseña inválida: mínimo 6 caracteres');
    
    /*
    } else {
        
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;

        if (!passwordRegex.test(data.password)) {
            errors.push('Contraseña inválida: Debe tener al menos una mayúscula, una minúscula, un caracter especial y un número');
        }*/
    }

    if (!data.role_id || isNaN(data.role_id))
        errors.push('Rol inválido');

    return errors;
};

const validateUpdateUser = (data) => {
    const errors = [];

    if (data.name && data.name.length < 3)
        errors.push('Nombre inválido');

    if (data.email && !data.email.includes('@'))
        errors.push('Email inválido');

    if (data.password && data.password.length < 6)
        errors.push('Contraseña inválida');

    if (data.role_id && isNaN(data.role_id))
        errors.push('Rol inválido');

    return errors;
};

module.exports = {
    validateUserId,
    validateCreateUser,
    validateUpdateUser
};