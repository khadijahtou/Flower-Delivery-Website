import { Router } from "express";
import { addUser, deleteUser, getUser } from "../controllers/userController.js";

const router = Router();

router.get("/", getUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);

export default router;
