import { Router } from "express";
import { addUser, deleteUser, getUser } from "../controllers/userController";
const router = Router();

router.get("/users", getUser);
router.post("/users", addUser);
router.delete("/users/:id", deleteUser);

export default router;
