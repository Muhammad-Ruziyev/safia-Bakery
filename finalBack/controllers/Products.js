const Product = require("../models/products");
const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
app.use(fileupload());
// all products
exports.allProducts = async (req, res, next) => {
  const product = await Product.find();
  res.json({
    success: true,
    data: product,
    id: product._id,
  });
  next();
};
// filter categories
exports.categoryProduct = async (req, res, next) => {
  const product = await Product.find({ category: req.params.cat });
  // const product = await Product.find();
  res.json({
    success: true,
    data: product,
  });
  next();
};
// single Product
exports.descriptionProduct = async (req, res, next) => {
  const infoProduct = await Product.findById(req.params.productID);
  res.status(200).json({
    success: true,
    data: infoProduct,
  });
  next();
};

// post a product
exports.createProduct = async (req, res, next) => {
  const { name, image, price, title, category, peoples } = req.body;

  const createrdProduct = await Product.create(req.body);
  res.status(200).json({
    success: true,
    data: createrdProduct,
    id: createrdProduct._id,
  });

  next();
};

const uploadFile = async (req, res, next) => {
  const { uploads } = req.body;
  const file = req.files.image;
  file.mv("./uploads/" + file.name, function (err, result) {
    res.send({
      success: true,
      message: "file-uploaded",
    });
  });
};

// delete product
exports.deleteProduct = async (req, res, next) => {
  const deletedProdut = await Product.findByIdAndDelete(req.params.productID);

  res.status(200).json({
    success: true,
    data: deletedProdut,
  });
  next();
};

// update product
exports.updateProduct = async (req, res, next) => {
  const { name, image, price, title, category, peoples } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productID,
    req.body
  );
  res.status(200).json({
    success: true,
    data: updatedProduct,
  });
  next();
};
