const express = require("express");

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register user
router.post("/", registerUser);

// Get user data
router.get("/me", protect, getMe);

// login user
router.post("/login", loginUser);

module.exports = router;
