const pool = require("../config/db");

// Create a new plan
const createPlan = async (plan) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO plan (title, price) VALUES (?, ?)",
      [plan.title, plan.price],
      (err, results) => {
        if (err) {
          console.error("Database error:", err); // Log database error
          reject(new Error("Database error: " + err.message));
        } else {
          resolve({ id: results.insertId, ...plan });
        }
      }
    );
  });
};

// Get plans with pagination and optional search
const getPlans = async (limit, offset, search) => {
  let query = "SELECT * FROM plan WHERE 1=1";
  let params = [];

  if (search) {
    query += " AND (title LIKE ?)";
    const searchParam = `%${search}%`;
    params.push(searchParam);
  }

  query += " LIMIT ? OFFSET ?";
  params.push(limit, offset);

  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, results) => {
      if (err) {
        reject(new Error("Database error: " + err.message));
      } else {
        resolve(results);
      }
    });
  });
};

// Delete a plan by its ID
const deletePlan = async (planId) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM plan WHERE id = ?", [planId], (err, results) => {
      if (err) {
        reject(new Error("Database error: " + err.message));
      } else {
        resolve(results.affectedRows > 0);
      }
    });
  });
};

// Update an existing plan
const updatePlan = async (planId, updatedPlan) => {
  const { title, price } = updatedPlan;

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE plan SET 
        title = COALESCE(?, title), 
        price = COALESCE(?, price) 
      WHERE id = ?`,
      [title, price, planId],
      (err, results) => {
        if (err) {
          reject(new Error("Database error: " + err.message));
        } else {
          resolve({
            id: planId,
            title,
            price,
          });
        }
      }
    );
  });
};

// Get a plan by its ID
const getPlanById = async (planId) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM plan WHERE id = ?", [planId], (err, results) => {
      if (err) {
        reject(new Error("Database error: " + err.message));
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = {
  createPlan,
  getPlans,
  deletePlan,
  updatePlan,
  getPlanById,
};
