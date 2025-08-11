import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (UserId) => {
	return jwt.sign({ UserId }, process.env.JWT_SECRET, {
		expiresIn: "5d",
	});
};
export const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
};
try {
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return res.status(400).json({ message: "User already exists" });
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({ name, email, password: hashedPassword });
	const token = generateToken(user._id);
	res.status(201).json({ user, token });
} catch (error) {
	res.status(500).json({ message: "Server error" });
}
export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({
			email,
		});
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}
		const token = generateToken(user._id);
		res.status(200).json({ user, token });
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
