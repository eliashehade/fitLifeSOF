const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// Route to register a new user
router.post("/register", userController.createUser);

// Route to log in a user
router.post("/login", userController.loginUser);

// Route to delete a user (admin only)
router.delete("/:userId", adminAuth, userController.deleteUser);

// Route to get the details of a user (authenticated user only)
router.get("/getUser", authMiddleware, userController.getUser);

// Route to get all users (admin only)
router.get("/getAllUsers", adminAuth, userController.getAllUsers);

// Route to update a user's details (admin only or the user themselves)
router.put("/:userId", authMiddleware, userController.updateUser); // Add this line

module.exports = router;
