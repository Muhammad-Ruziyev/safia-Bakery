const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/errorHandler");
// encloded
app.use(express.json());
app.use(cors());

// import routes
const Safia = require("./routes/Products");
const News = require("./routes/News");
const auth = require("./routes/auth");
const cart = require("./routes/cart");

// connecting to database
const connectDB = require("./config/db");
connectDB();

// routes
app.use("/safiabakery.uz/products", Safia);
app.use("/safiabakery.uz/news", News);
app.use("/safiabakery.uz/auth", auth);
app.use("/safiabakery.uz/cart", cart);
app.use(errorHandler);

// server
app.listen(5000, () => console.log("server is running"));
