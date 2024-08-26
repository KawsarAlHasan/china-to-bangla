const express = require("express");
const {
  createSubcriptionName,
  getAllSubcriptionsName,
  getOneSubcriptionName,
  updateSubcriptionName,
  deleteSubcriptionName,
} = require("../controllers/subcription.name.controller");
const router = express.Router();

router.post("/create", createSubcriptionName);
router.get("/all", getAllSubcriptionsName);
router.get("/:id", getOneSubcriptionName);
router.patch("/:id", updateSubcriptionName);
router.delete("/:id", deleteSubcriptionName);

module.exports = router;
