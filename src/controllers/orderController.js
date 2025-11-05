import { Order } from "../models/order.js";
import { User } from "../models/user.js";

export const createOrder = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId);

        if (!user) return res.status(404).json({ message : "User not found"});
        
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getOrdersFromUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const order = await Order.findAll({ where : { userId}});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}