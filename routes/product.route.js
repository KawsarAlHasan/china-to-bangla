const express = require("express");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const uploadImage = require("../middleware/imagesUploader");
const router = express.Router();

router.post("/create", uploadImage.array("images", 10), createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getOneProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
