const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async (userData) => {
  try {
    console.log("Creating user with data:", userData);

    const existingUser = await userModel.findUserByEmail(userData.email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    // Create the user
    await userModel.createUser(userData);

    // Retrieve the user object after creation
    const createdUser = await userModel.findUserByEmail(userData.email);
    if (!createdUser) {
      throw new Error("User could not be created");
    }

    const token = jwt.sign({ id: createdUser.UserID }, process.env.JWT_SECRET);

    // Remove the password field from the user object
    delete createdUser.Password;
    createdUser.token = token;

    return createdUser;
  } catch (err) {
    console.error("Error in createUser:", err.message);
    throw new Error(err.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await userModel.findUserByEmail(email);
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }

    const validPassword = await bcrypt.compare(password, user.Password);

    if (!validPassword) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.UserID }, process.env.JWT_SECRET);

    delete user.Password;
    user.token = token;

    return user;
  } catch (err) {
    console.error("Error in loginUser:", err.message);
    throw new Error(err.message);
  }
};

const getUser = async (email) => {
  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (!existingUser) {
      throw new Error("User does not exist");
    }
    delete existingUser.Password;
    return existingUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (userId) => {
  try {
    const existingUser = await userModel.deleteUser(userId);
    if (!existingUser) {
      throw new Error("User does not exist");
    }
    return { message: "User deleted successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await userModel.getAllUsers();
    if (!allUsers || allUsers.length === 0) {
      throw new Error("No users found");
    }
    return allUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update user details
const updateUser = async (userId, updateData) => {
  try {
    console.log(updateData);
    
    // Update the user in the database
    const result = await userModel.updateUser(userId, updateData);
    if (result.message === "User updated successfully") {
      // Fetch the updated user data
      const updatedUser = await userModel.findUserByEmail(updateData.email);
      if (!updatedUser) {
        throw new Error("User could not be found after update");
      }

      delete updatedUser.Password;
      return updatedUser;
    } else {
      throw new Error("User update failed");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
