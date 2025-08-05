// flowerRouter.js

import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure uploads folder exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + uniqueSuffix + ext);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg"
	) {
		cb(null, true);
	} else {
		cb(new Error("Only .png, .jpg, or .jpeg images are allowed!"), false);
	}
};

const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
});

// Dummy flower array to simulate a database
const flowers = [];

// Controller logic
const getFlowers = (req, res) => {
	res.status(200).json(flowers);
};

const addFlower = (req, res) => {
	const { name, description } = req.body;
	const image = req.file?.filename;

	if (!name || !description || !image) {
		return res.status(400).json({ error: "All fields are required." });
	}

	const newFlower = { id: Date.now(), name, description, image };
	flowers.push(newFlower);
	res.status(201).json(newFlower);
};

const deleteFlower = (req, res) => {
	const flowerId = parseInt(req.params.id);
	const index = flowers.findIndex((f) => f.id === flowerId);
	if (index === -1) {
		return res.status(404).json({ error: "Flower not found" });
	}
	const deleted = flowers.splice(index, 1);
	res.status(200).json({ message: "Deleted successfully", flower: deleted[0] });
};

// Routes
router.get("/flowers", getFlowers);
router.post("/flowers", upload.single("image"), addFlower);
router.delete("/flowers/:id", deleteFlower);

export default router;
