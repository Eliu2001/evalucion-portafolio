import { User, Order } from "../models/index.js";

export const createOrder = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findByPk(userId);

        if (!user) return res.status(404).json({ message : "User not found"});
        
        const order = await Order.create({ ...req.body, user_id:  userId });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getOrdersFromUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.findAll({ where: { user_id: userId }, include: [{ model: User }], });
        res.status(200).json(orders);
    } catch (error) {
        console.error("❌ Error fetching orders:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}