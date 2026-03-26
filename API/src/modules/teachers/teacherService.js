const TeacherModel = require('./teacherModel');
const UserModel = require('../users/userModel');

const createTeacher = async (data) =>{
    const user = await UserModel.getUserById(data.user_id);

    if(!user){
        throw new Error('El usuario no existe');
    }

    return await TeacherModel.createTeacher(data);
}

const getTeachers = async () =>{
    return await TeacherModel.getTeacherById();
}

const getTeacherById = async (id) => {
    const teacher = await TeacherModel.getTeacherById(id)

    if(!teacher){
        throw new Error("Teacher no encontrado");
    }

    return teacher;
}

const updateTeacher = async(id, data) =>{
    const existing = await TeacherModel.getTeacherById(id)

    if(!existing){
        throw new Error('Teacher no encontrado');
    }

    if(data.user_id){
        const user = await UserModel.getUserByEmail(data.user_id);

        if(!user){
            throw new Error('El usuario no existe')
        }
    }

    return await TeacherModel.updateTeacher(id, data);
}

const deleteTeacher = async (id) => {
    
    const existing = await TeacherModel.getTeacherById(id);

    if(!existing){
        throw new Error('Teacher no encontrado');
    }

    return await TeacherModel.deleteTeacher(id);
}

module.exports = {
    createTeacher,
    getTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}