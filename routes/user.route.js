const express = require("express");
const {
  createUser,
  getAllUsers,
  getOneUser,
  loginUser,
  deleteUser,
  updateUser,
  getMe,
} = require("../controllers/user.controller");
const varifyToken = require("../middleware/varifyToken");

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/all", getAllUsers);
router.get("/me", getMe);
router.get("/:id", getOneUser);
router.patch("/:id", varifyToken, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
