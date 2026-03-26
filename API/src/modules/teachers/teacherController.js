const Teacher = require('../models/teacherModel');

const createTeacher= async(req, res) =>{
    try {
        const id = await Teacher.createTeacher(req.body);
        res.status(201).json({message: `Especialidad de profesor ${id} creada con exito`});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const getTeacher = async(req, res) =>{
    try {
        const teachers = await Teacher.getTeachers(req.query);
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const getTeacherById = async(req, res) =>{
    try {
        const {id} = req.params;
        const teacher = await Teacher.getTeacherById(id);

         if(!teacher){
            return res.status(404).json({message: `Profesor con ${id} no encontrado`});
        };
        res.status(200).json(teacher);

    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const updateTeacher = async(req, res) =>{
    try {
        const rows = await Teacher.getTeachers(req.params.id, req.body);

        if(rows === 0){
            return res.status(404).json({message: 'Teacher no encontrado'});
        };
        res.status(200).json({message: 'Teacher actualizado'});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const deleteTeacher = async(req, res) =>{
    try{
        const rows = await Teacher.deleteTeacher(req.params.id)
        if(rows === 0){
            return res.status(404).json({message: 'Teacher no encontrado'});
        };
        res.status(200).json({message: 'Teacher eliminado con exito'});
    } catch(error){
        res.status(500).json({error: error.message});
    };
};

module.exports = {
    createTeacher,
    getTeacher,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}