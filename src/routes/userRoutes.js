import e from "express";
import { getUsers, createUser, updateUser, deleteUser, getUserById } from "../controllers/userController.js";

const router = e.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;