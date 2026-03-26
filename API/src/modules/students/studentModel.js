const db = require('../config/db');

const createStudent = async(student) =>{
    const {carrer, enrollment_date, user_id} = student
    const [result] = await db.query(
        'INSERT INTO students (user_id, carrer, enrollment_date) VALUES (?,?,?)', [user_id, carrer, enrollment_date]
    );

    return result.insertId;
}

const getStudent = async() =>{
    const [rows] = await db.query(
       `SELECT s.*, u.name, u.email
        FROM students s
        JOIN users u ON s.user_id = u.id
        `
    );
    return rows;
}

const getStudentById = async(id) =>{
    const [rows] = await db.query(
        `SELECT s.*, u.name, u.email
         FROM students s
         JOIN users u ON s.user_id = u.id
         WHERE s.id = ?`,[id]
    )
    return rows[0]
} 

const updateStudent = async(id, student)=>{
    const {carrer, enrollment_date} = student;
    const [result] = await db.query(
        `UPDATE students SET carrer = ?, enrollment_date = ? 
         WHERE id = ?`, [carrer, enrollment_date, id]
    );
    return result.affectedRows;
}

const deleteUser = async(id) =>{
    const [result] = await db.query(`
        DELETE FROM students WHERE id = ?`, [id]
    );
    return result.affectedRows;
}

module.exports = {
    createStudent,
    getStudent,
    getStudentById,
    updateStudent,
    deleteUser
}