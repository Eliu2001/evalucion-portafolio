import express from "express";
import { createOrder, getOrdersFromUser } from "../controllers/orderController.js";

const router = express.Router();

router.post("/users/:userId/orders", createOrder);
router.get("/users/:userId/orders", getOrdersFromUser);

export default router;
