import Flower from "./flowerModel.js";
import express from "express";

const getFlower = async (req, res) => {
	try {
		const flower = await Flower.find();
		res.status(200).json(flower);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch flowers" });
	}
};
const addFlower = async (req, res) => {
	try {
		const { name, description, price, category } = req.body;
		const image = req.file?.path;

		const flower = new Flower({ name, description, price, category, image });
		await flower.save();
		res.json(flower);
	} catch (err) {
		res.status(500).json({ error: "Failed to add flower" });
	}
};

const deleteFlower = async (req, res) => {
	try {
		await Flower.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Flower deleted Successfully" });
	} catch (err) {
		res.status(500).json({ error: "Failed to delete flower" });
	}
};

// ✅ Export all controller methods as an object
const flowerCtrl = {
	getFlower,
	addFlower,
	deleteFlower,
};

export default flowerCtrl;
