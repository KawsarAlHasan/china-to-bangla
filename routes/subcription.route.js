const express = require("express");
const {
  createSubcription,
  getAllSubcriptions,
  getOneSubcription,
  updateSubcription,
  deleteSubcription,
} = require("../controllers/subcription.controller");
const router = express.Router();

router.post("/create", createSubcription);
router.get("/all", getAllSubcriptions);
router.get("/:id", getOneSubcription);
router.patch("/:id", updateSubcription);
router.delete("/:id", deleteSubcription);

module.exports = router;
