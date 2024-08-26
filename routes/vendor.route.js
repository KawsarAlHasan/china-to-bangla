const express = require("express");
const {
  createVendor,
  getAllVendors,
  getSingleVendor,
  deleteVendor,
  updateVendor,
} = require("../controllers/vendor.controller");
const router = express.Router();

router.post("/create", createVendor);
router.get("/all", getAllVendors);
router.get("/:id", getSingleVendor);
router.delete("/:id", deleteVendor);
router.patch("/:id", updateVendor);

module.exports = router;
