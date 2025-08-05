const express = require("express");
const router = express.Router();
const flowerCtrl = require("./flowerController");
const upload = require("./middlewares/uploadMiddleware");
// route to get all flowwers
router.get("/flowers", flowerCtrl.getFlowers);
router.post("/flowers", upload.single("image"), flowerCtrl.addFlower);
router.delete("/flowers/:id", flowerCtrl.deleteFlower);

module.exports = router;
