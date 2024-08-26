const express = require("express");
const {
  loginAdmin,
  getMeAdmin,
  adminUpdate,
  createAdmin,
} = require("../controllers/admin.controller");
const varifyAdminToken = require("../middleware/varify.admin.token");

const router = express.Router();

router.post("/", loginAdmin);
router.post("/create", createAdmin);
router.patch("/:id", varifyAdminToken, adminUpdate);
router.get("/me", varifyAdminToken, getMeAdmin);

module.exports = router;
