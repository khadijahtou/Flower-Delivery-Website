import express, { urlencoded } from "express";
import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";

// import connectToDataBase from "./database";
dotenv.config();

async function connectToDataBase() {
	try {
		const mongodbUri = process.env.MONGODB_URI;
		const connection = await mongoose.connect(mongodbUri, {
			dbName: "flowerdeliverydb",
		});
		if (connection.connection.db) {
			console.log(colors.cyan("database connected"));
		}
	} catch (error) {
		console.log(colors.red(error));
	}
}
const port = process.env.PORT;
const app = express();
// middlewear converts request to js objects
app.use(express.json());
//parse url
app.use(express.urlencoded({ extended: false }));
app.get("/end", (req, res) => {
	res.send("hello");
});
app.listen(port, async () => {
	console.log(colors.blue("server is running on port 3000"));
	await connectToDataBase();
});
