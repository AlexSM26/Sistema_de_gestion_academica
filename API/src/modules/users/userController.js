const UserService = require('./userService');

const getUsers = async (req, res, next) => {
    try {
        const users = await UserService.getUsers(req.query);
        res.json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(`Usuario ${user} creado con exito`);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const user = await UserService.updateUser(
            req.params.id, 
            req.body
        );
        res.json(user);
    
    } catch (error) {
        next(error);
    }
};
const deleteUser = async (req, res, next) => {
    try {
        await UserService.deleteUser(req.params.id);

        return res.json({ message: 'Usuario eliminado correctamente' });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};