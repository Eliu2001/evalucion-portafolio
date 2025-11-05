import e from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = e.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;