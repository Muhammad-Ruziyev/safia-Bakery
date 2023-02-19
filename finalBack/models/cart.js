const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  name: {
    type: String,
    required: [true, "please add name"],
  },
  price: {
    type: Number,
    required: [true, "please add price"],
  },
  image: {
    type: String,
    required: [true, "please add image"],
  },
  title: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: [true, "please add category"],
  },
  peoples: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "auth",
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
