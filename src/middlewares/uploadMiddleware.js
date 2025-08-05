import multer from "multer";
import path from "path";

// set up storage engine
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		// get the file extension
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + uniqueSuffix + ext);
	},
});
// file filter to allow only images
const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg"
	) {
		cb(null, true);
	} else {
		cb(new Error("Only .png, .jpg, or jpeg images are allowed!"), false);
	}
};

// initialize multer wwith stronge storage and file filter
const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
});
// export the upload middleware
export default upload;
