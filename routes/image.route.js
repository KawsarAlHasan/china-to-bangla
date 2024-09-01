const express = require("express");

const { uploadedImage, getImages } = require("../controllers/image.controller");
const uploadImage = require("../middleware/imagesUploader");
const router = express.Router();

router.post("/create", uploadImage.single("image"), uploadedImage);

// Route to upload an image
// router.post('/upload', upload.single('image'), imageController.uploadImage);

// // Route to get all images
router.get("/all", getImages);

module.exports = router;
