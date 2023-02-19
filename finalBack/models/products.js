const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
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
  uploads: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
