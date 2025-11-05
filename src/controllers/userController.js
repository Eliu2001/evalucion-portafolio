import { User } from "../models/user";

export const createUser = async (req, res) => {
    try { 
        const user = await User.create(req.body)<
        res.status(201).json(user);
    }catch (err) {
        res.status(500).json({ err : err.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ err : error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id} = req.params;
        const [updated] = await User.update(req.body, { where : {id} });
        updated ? res.status(200).json({ message : "User updated successfully"}) : res.status(404).json({ message : "User not found"});
    } catch (error) {
        res.status(500).json({ err : error.message });
    }
};

export const deleteUser = async (req, res) => { 
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where : { id} });
        deleted ? res.status(200).json({ message : "User deleted successfully"}) : res.status(404).json({ message : "User not found"});
    } catch (error) {
        res.status(500).json({ err : error.message });
    }
};