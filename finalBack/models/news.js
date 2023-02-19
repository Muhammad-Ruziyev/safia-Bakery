const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewsSchema = new Schema({
  name: {
    type: String,
    required: [true, "please add name"],
  },
  image: {
    type: String,
    required: [true, "please add image"],
  },
  title: {
    type: String,
    required: false,
  },
  data: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("News", NewsSchema);
