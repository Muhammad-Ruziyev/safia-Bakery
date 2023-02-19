const Cart = require("../models/cart");

// all products
exports.allCartProducts = async (req, res, next) => {
  const product = await Cart.find();
  res.json({
    success: true,
    data: product,
  });
  next();
};
// single Product
// exports.descriptionCartProduct = async (req, res, next) => {
//   const infoCartProduct = await Cart.findById(req.params.cartId);
//   res.status(200).json({
//     success: true,
//     data: infoCartProduct,
//   });
//   next();
// };

// post a product
exports.createCartProduct = async (req, res, next) => {
  const { name, image, price, title, category, peoples } = req.body;

  const createrdCartProduct = await Cart.create(req.body);
  res.status(200).json({
    success: true,
    data: createrdCartProduct,
  });

  next();
};

// delete product
exports.deleteCartProduct = async (req, res, next) => {
  const deletedProdut = await Cart.findByIdAndDelete(req.params.cartId);

  res.status(200).json({
    success: true,
    dataP: deletedProdut,
  });
  next();
};
