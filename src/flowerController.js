const Flower = reuire("./flowerModel");
const express = require("express");
exports.getflower = async (req, res) => {
	const flower = await Flower.find();
	res.status(200).json(flower);
};
exports.addFlower = async (req, res) => {
	const { name, description, price, category } = req.body;
	const image = req.file?.path;

	const flower = new Flower({ name, description, price, category, image });
	await flower.save();
	res.json(flower);
};

exports.deleteFlower = async (req, res) => {
	await Flower.findByIdAndDelete(req.params.id);
	res.status(200).json({ message: "Flower deleted Succsessfully" });
};
