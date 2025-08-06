import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import flowerRouter from "./routers/flowerRouter.js";
import connectToDataBase from "./database.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
// middlewear converts request to js objects
app.use(express.json());
//parse url
app.use(express.urlencoded({ extended: false }));
//test route
app.get("/end", (req, res) => {
	res.status(200).json({ messaage: "hello" });
});
// user routes
app.use("/api/flowers", flowerRouter);

app.listen(port, async () => {
	console.log(colors.blue("server is running on port 3000"));
	await connectToDataBase();
});
