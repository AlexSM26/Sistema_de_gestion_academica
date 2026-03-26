const db = require('../config/db')

//Post

const createTeacher = async(teacher) =>{
    const {specialty, user_id} = teacher
    const [result] = await db.query(
        'INSERT INTO teachers (specialty, user_id) VALUES (?,?)', [specialty, user_id]
        ) 
        return result.insertId;
}

const getTeachers = async () =>{
    const [rows] = await db.query(
       `SELECT t.*, u.name, u.email
        FROM teachers t
        JOIN users u ON t.user_id = u.id
        `
    );
    return rows;
}

const getTeacherById = async(id) =>{
    const [rows] = await db.query(
        `SELECT t.*, u.name, u.email
         FROM teachers t
         JOIN users u ON t.user_id = u.id
         WHERE t.id = ?`,[id]
    )
    return rows[0]
} 


const updateTeacher = async (id, teacher) =>{
    const {specialty} = teacher;
    const [result] = await db.query(
        'Update teachers SET specialty = ?, user_id = ? WHERE id = ?', [specialty, id]
    );
    return result.affectedRows;
}

const deleteTeacher = async(id) =>{
    const [result] = await db.query(
        'DELETE FROM teachers WHERE id = ?', [id]
    );
    return result.affectedRows;
}



module.exports = {
    createTeacher,
    getTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}