const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");
const adminAuth = require("../middleware/adminAuth"); // Middleware for admin authentication

// Route to create a new plan (restricted to admins)
// router.post("/", adminAuth, planController.createPlan);

// Route to get all plans (public)
router.get("/", planController.getPlans);

// Route to delete a specific plan by ID (restricted to admins)
router.delete("/:planId", adminAuth, planController.deletePlan);

// Route to update a specific plan by ID (restricted to admins)
router.put("/:planId", adminAuth, planController.updatePlan);

// Route to get a specific plan by ID (public)
router.get("/:planId", planController.getPlanById);

module.exports = router;
