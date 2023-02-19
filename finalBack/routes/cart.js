const express = require("express");
const router = express.Router();
const {
  allCartProducts,
  deleteCartProduct,
  createCartProduct,
} = require("../controllers/cart");

router.route("/").get(allCartProducts).post(createCartProduct);
router.route("/:cartID").delete(deleteCartProduct);
module.exports = router;
