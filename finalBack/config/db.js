const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://scooby:123@cluster0.7pj4t9y.mongodb.net/safia?retryWrites=true&w=majority";

async function connectDB() {
  try {
    const db = await mongoose.connect(mongoUrl);
    console.log(db.connection.host);
  } catch (err) {
    console.log(err);
  }
}
module.exports = connectDB;
