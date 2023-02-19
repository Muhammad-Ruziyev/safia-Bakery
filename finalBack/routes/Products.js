const express = require("express");
const router = express.Router();
const {
  allProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  descriptionProduct,
  categoryProduct,
} = require("../controllers/Products");

router.route("/").get(allProducts).post(createProduct);
router.route("/category/:cat").get(categoryProduct);
router
  .route("/:productID")
  .get(descriptionProduct)
  .put(updateProduct)
  .delete(deleteProduct);
module.exports = router;
