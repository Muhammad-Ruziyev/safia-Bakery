const jwt = require("jsonwebtoken");
const User = require("../models/products");
exports.protect = async function (req, res, next) {
  const token = req.headers.autharization;
  if (!token) res.send("Access denided to token provided");
  next();
  try {
    const decodedToken = await jwt.verify(token, "password123");
    const user = await User.findById(decodedToken._id);
    console.log(user);
  } catch (err) {
    next(err);
  }
};
