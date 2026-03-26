const db = require('../../config/db')

const createUser = async(user) =>{
    const {name,email,password,role_id} = user
    const [result] = await db.query(
        `INSERT INTO users (name,email,password,role_id) 
         VALUES (?,?,?,?)`, 
         [name,email,password,role_id]
        ) 
    return result.insertId;
}

const getUsers = async (filters = {}) =>{
    let sql = `
    SELECT u.id, u.name,u.password, u.email, r.name AS role, u.create_at 
    FROM users u 
    JOIN roles r ON u.role_id = r.id 
    where 1=1`;

    const params = [];

    if(filters.name){
        sql += ' AND u.name LIKE ?';
        params.push(`%${filters.name}%`)
    }

    if(filters.email){
        sql += ' AND u.email = ?';
        params.push(filters.email)
    }

    if(filters.role){
        sql += ' AND r.name = ?';
        params.push(filters.role)
    }

    const [rows] = await db.query(sql, params);
    return rows;
}

const getUserById = async(id) =>{
    const [rows] = await db.query(
        `SELECT * FROM users 
        WHERE id = ?`, 
        [id]
    );
    return rows[0];
}

const getUserByEmail = async (email) => {
    const [rows] = await db.query(
        `SELECT u.*, r.name AS role
         FROM users u
         JOIN roles r ON u.role_id = r.id
         WHERE u.email = ?`,
        [email]
    );
    return rows[0];
}

const updateUser = async (id, user) =>{
    const {name,email,password,role_id} = user;
    const [result] = await db.query(
        `Update users 
         SET name = ?, email = ?, password = ?, role_id = ? 
         WHERE id = ?`,
         [name,email,password,role_id, id]
    );
    return result.affectedRows;
}

const deleteUser = async (id) => {
    
    await db.query(`
        DELETE FROM students 
        WHERE user_id = ?`, 
        [id]);
    
    const [result] = await db.query(`
        DELETE FROM users 
        WHERE id = ?`, 
        [id]);
    
    return result.affectedRows;
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser
}