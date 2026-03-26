const validateCreateTeacher = (data) =>{
    const errors = [];

    if(!data.user_id || isNaN(data.user_id))

    if (!data.specialty || data.specialty.length < 3) {
        errors.push('Especialidad inválida');
    }

    if (data.specialty && data.specialty.length > 20) {
        errors.push('Especialidad muy larga (máx 20)');
    }

    return errors;
}

const validateUpdateTeacher = (data) =>{
    const errors = [];

    if (!data.specialty || data.specialty.length < 3) {
        errors.push('Especialidad inválida');
    }

    if (data.specialty && data.specialty.length > 20) {
        errors.push('Especialidad muy larga (máx 20)');
    }

    return errors;
}

module.exports = {
    validateCreateTeacher,
    validateUpdateTeacher
}
