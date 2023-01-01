const express = require("express");

const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
  getGoalById,
} = require("../controllers/goalController.js");

const { protect } = require("../middleware/authMiddleware.js");

// Get all goals
router.get("/", protect, getGoals);

router.get("/:id", protect, getGoalById);

// Get create goals
router.post("/", protect, setGoal);

// Update goals
router.put("/:id", protect, updateGoal);

// Delete goals
router.delete("/:id", protect, deleteGoal);

module.exports = router;
