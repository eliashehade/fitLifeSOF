const planModel = require("../models/planModel");

const createPlan = async (plan) => {
  try {
    // Pass the plan data to the model for database insertion
    return await planModel.createPlan(plan);
  } catch (error) {
    console.error("Error in createPlan service:", error); // Log error details
    throw new Error("Plan creation error: " + error.message);
  }
};

const getPlans = async (limit, offset, search) => {
  try {
    // Fetch plans with pagination and optional search
    return await planModel.getPlans(limit, offset, search);
  } catch (error) {
    console.error("Error in getPlans service:", error); // Log error details
    throw new Error("Plan retrieval error: " + error.message);
  }
};

const deletePlan = async (planId) => {
  try {
    // Delete the plan by its ID
    return await planModel.deletePlan(planId);
  } catch (error) {
    console.error("Error in deletePlan service:", error); // Log error details
    throw new Error("Plan deletion error: " + error.message);
  }
};

const updatePlan = async (planId, updatedPlan) => {
  try {
    // Fetch the current plan details from the database
    const currentPlan = await planModel.getPlanById(planId);

    // If no updated fields are provided, retain the existing values
    if (!updatedPlan.title) {
      updatedPlan.title = currentPlan.title;
    }
    if (!updatedPlan.price) {
      updatedPlan.price = currentPlan.price;
    }

    // Pass the updated plan to the model for database update
    const result = await planModel.updatePlan(planId, updatedPlan);
    return result;
  } catch (error) {
    console.error("Error in updatePlan service:", error); // Log error details
    throw new Error("Plan update error: " + error.message);
  }
};

const getPlanById = async (planId) => {
  try {
    // Fetch the plan by its ID
    return await planModel.getPlanById(planId);
  } catch (error) {
    console.error("Error in getPlanById service:", error); // Log error details
    throw new Error("Plan retrieval error: " + error.message);
  }
};

module.exports = {
  createPlan,
  getPlans,
  deletePlan,
  updatePlan,
  getPlanById,
};
