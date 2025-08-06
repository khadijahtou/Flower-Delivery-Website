import { Router } from "express";
import {
	addFlower,
	deleteFlower,
	getFlower,
} from "../controllers/flowerController.js";

const router = Router();
router.post("/", addFlower);
router.get("/", getFlower);
router.delete("/:id", deleteFlower);

export default router;
