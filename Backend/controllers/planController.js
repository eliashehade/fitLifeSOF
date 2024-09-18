const planService = require("../services/planService");

const createPlan = async (req, res) => {
  try {
    const { title, price } = req.body;

    if (!title || !price) {
      return res.status(400).json({ error: "Title and price are required." });
    }

    const createdPlan = await planService.createPlan({ title, price });
    res.status(201).json(createdPlan);
  } catch (error) {
    console.error("Error in createPlan:", error); // Log error details
    res.status(500).json({ error: error.message });
  }
};

const getPlans = async (req, res) => {
  try {
    const { limit = 50, offset = 0, search } = req.query;

    console.log("Received query params:", {
      limit,
      offset,
      search,
    });

    const plans = await planService.getPlans(parseInt(limit), parseInt(offset), search);
    res.status(200).json(plans);
  } catch (error) {
    console.error("Error in getPlans:", error); // Log error details
    res.status(500).json({ error: error.message });
  }
};

const deletePlan = async (req, res) => {
  try {
    const { planId } = req.params;
    await planService.deletePlan(planId);
    res.status(204).end();
  } catch (error) {
    console.error("Error in deletePlan:", error); // Log error details
    res.status(500).json({ error: error.message });
  }
};

const updatePlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const { title, price } = req.body;

    if (!title && !price) {
      return res.status(400).json({ error: "At least one field (title or price) must be provided for update." });
    }

    const updatedPlan = { title, price };
    const updatedPlanData = await planService.updatePlan(planId, updatedPlan);

    res.status(200).json(updatedPlanData);
  } catch (error) {
    console.error("Error in updatePlan:", error); // Log error details
    res.status(500).json({ error: error.message });
  }
};

const getPlanById = async (req, res) => {
  try {
    const { planId } = req.params;
    const plan = await planService.getPlanById(planId);
    if (!plan) {
      return res.status(404).json({ error: "Plan not found." });
    }
    res.status(200).json(plan);
  } catch (error) {
    console.error("Error in getPlanById:", error); // Log error details
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPlan,
  getPlans,
  deletePlan,
  updatePlan,
  getPlanById,
};
