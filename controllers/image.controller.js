const Image = require("../models/image.model");

// Upload image
exports.uploadedImage = async (req, res) => {
  try {
    const pathMain = req.file.path;

    const path = "https://china-to-bangla.onrender.com/" + pathMain;

    const result = await Image.create({ path });

    res.status(200).json({
      status: "Success",
      message: "Image upload Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all images
exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
