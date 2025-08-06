import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: Strings, required: true, unique: true },
		password: { type: String, requires: true },
		cartData: { type: Object, default: {} },
	},
	{ minimize: false }
);
