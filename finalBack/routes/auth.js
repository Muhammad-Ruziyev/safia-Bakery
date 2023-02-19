const express = require("express");
const { RegistrateUser, updateUser, Login } = require("../controllers/auth");

const router = express.Router();

router.route("/register").post(RegistrateUser);
router.route("/login").post(Login);
router.route("/:userID").put(updateUser);

module.exports = router;
