const Student = require('../models/studentModel');

const createStudent = async(req, res) =>{
    try {
        const id = await Student.createStudent(req.body);
        res.status(201).json({message: `Esdudiante ${id} creado con exito`});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const getStudent = async(req, res) =>{
    try {
        const students = await Student.getStudent(req.query);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const getStudentById = async(req, res) =>{
    try {
        const {id} = req.params;
        const student = await Student.getStudentById(id);

         if(!student){
            return res.status(404).json({message: `Estudiante con ${id} no encontrado`});
        };
        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const updateStudent = async(req, res) =>{
    try {
        const rows = await Student.updateStudent(req.params.id, req.body);

        if(rows === 0){
            return res.status(404).json({message: 'Estudiante no encontrado'});
        };
        res.status(200).json({message: 'usuario actualizado'});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

const deleteStudent = async(req, res) =>{
    try{
        const rows = await Student.deleteUser(req.params.id)
        if(rows === 0){
            return res.status(404).json({message: 'Estudiante no encontrado'});
        };
        res.status(200).json({message: 'Estudiante eliminado con exito'});
    } catch(error){
        res.status(500).json({error: error.message});
    };
};

module.exports = {
    createStudent,
    getStudent,
    getStudentById,
    updateStudent,
    deleteStudent
}