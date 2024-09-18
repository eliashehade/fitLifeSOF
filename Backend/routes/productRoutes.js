const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");
const adminAuth = require("../middleware/adminAuth");

const upload = multer({ dest: "uploads/" });

router.post(
  "/",
  adminAuth,
  upload.single("image"),
  productController.createProduct
);

router.get("/", productController.getProducts);
router.delete("/:productId", adminAuth, productController.deleteProduct);
router.put("/:productId", adminAuth, productController.updateProduct);

module.exports = router;
