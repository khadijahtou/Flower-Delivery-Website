const mongoose = require("mongoose");
const flowerSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	category: String,
	ImageUrl: String,
});
module.export = mongoose.model("Flower", flowerSchema);
