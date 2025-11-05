import express from "express";
import { createOrder, getOrdersFromUser } from "../controllers/orderController.js";

const router = express.Router();

// Crear pedido de un usuario
router.post("/users/:userId/orders", createOrder);

// Obtener pedidos de un usuario
router.get("/users/:userId/orders", getOrdersFromUser);

export default router;
