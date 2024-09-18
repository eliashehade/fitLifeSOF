const userService = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await userService.getUser(email);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId; // Get userId from request parameters
    const result = await userService.deleteUser(userId);
    res.status(200).send(result); // Send the result back to the client
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Add the updateUser method
const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.userId; // Get userId from request parameters
    const updateData = req.body; // Get update data from request body

    // Ensure that userId and updateData are provided
    if (!userId || !updateData) {
      return res.status(400).send({ error: "User ID and update data are required" });
    }

    const result = await userService.updateUser(userId, updateData);
    res.status(200).send(result); // Send the updated user data back to the client
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser, // Export the new updateUser method
};
