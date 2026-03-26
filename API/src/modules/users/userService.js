const bcrypt = require('bcrypt');
const UserModel = require('./userModel');

const createUser = async (data) => {
    const existing = await UserModel.getUserByEmail(data.email);
    if (existing) {
        throw new Error('El email ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await UserModel.createUser({
        ...data,
        password: hashedPassword
    });
};

const getUsers = async (filters) => {
    return await UserModel.getUsers(filters);
};

const getUserById = async (id) => {
    const user = await UserModel.getUserById(id);

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    return user;
};

const updateUser = async (id, data) => {
    const existing = await UserModel.getUserById(id);
    if (!existing) {
        throw new Error('Usuario no encontrado');
    }

    if (data.email) {
        const emailTaken = await UserModel.getUserByEmail(data.email);
        if (emailTaken && emailTaken.id !== Number(id)) {
            throw new Error('El email ya está en uso');
        }
    }

    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    } else {
        data.password = existing.password;
    }

    return await UserModel.updateUser(id, data);
};

const deleteUser = async (id) => {
    const existing = await UserModel.getUserById(id);
    if (!existing) {
        throw new Error('Usuario no encontrado');
    }

    return await UserModel.deleteUser(id);
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};