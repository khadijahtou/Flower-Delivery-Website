import { Router } from "express";
import {
	addFlower,
	deleteFlower,
	getFlower,
} from "../controllers/flowerController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = Router();
router.post("/", upload.single("image"), addFlower);
router.get("/", getFlower);
router.delete("/:id", deleteFlower);
// router.get("/:id")

export default router;
