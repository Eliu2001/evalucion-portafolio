import e from "express";
import { createOrder, getOrdersFromUser } from "../controllers/orderController.js";

const router = e.Router();

router.post("/:userId/orders", createOrder);
router.get("/:userId/orders", getOrdersFromUser);

export default router;
