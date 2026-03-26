const { 
    validateCreateTeacher, 
    validateUpdateTeacher
} = require('./teacherValidator');

const validateTeacherIdMiddleware = (req, res, next) => {
    const { id } = req.params;

    if (!id || isNaN(id) || Number(id) <= 0) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    next();
};

const validateCreateTeacherMiddleware = (req, res, next) =>{
    const errors = validateCreateTeacher(req.body);

    if(errors.length > 0){
        return res.status(400).json({ errors });
    }
    next();
}

const validateUpdateTeacherMiddleware = (req, res, next) =>{
    const errors = validateUpdateTeacher(req.body);

    if(errors.length > 0){
        return res.status(400).json({ errors })
    }

    next();
}

module.exports = {
    validateCreateTeacherMiddleware,
    validateUpdateTeacherMiddleware,
    validateTeacherIdMiddleware
}
