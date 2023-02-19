const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthSchema = new Schema({
  name: {
    type: String,
    required: [true, "please add name"],
  },
  birth: {
    type: String,
    required: [true, "please add data of birth"],
  },
  email: {
    type: String,
    required: [true, "please add email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please add password"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// password hashed
AuthSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//  compare bcrypt password
AuthSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generate user token
AuthSchema.methods.generateJWTToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email, password: this.password },
    "password123"
  );
  return token;
};
module.exports = mongoose.model("Auth", AuthSchema);
