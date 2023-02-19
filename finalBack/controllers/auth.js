const Auth = require("../models/auth");

//  Registrate

exports.RegistrateUser = async (req, res) => {
  const { name, email, password, birth } = req.body;

  // user created with hashed password
  const user = await Auth.create({ name, email, password, birth });
  const token = user.generateJWTToken();

  res.status(200).json({
    success: true,
    token: token,
    id: user._id,
    admin: user.isAdmin,
  });
};

// change name , email or password

exports.updateUser = async (req, res) => {
  const { name, email, password, birth } = req.body;
  try {
    const updatedUser = await Auth.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (err) {
    res.status(400).json({
      success: true,
      data: err.message,
    });
  }
};

// login

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findOne({ email: email });
    if (!user)
      return res.status(400).json({
        success: false,
        message: "email or password is incorrect !!!",
      });
    const match = await user.matchPassword(password);
    if (!match)
      return res.status(400).json({
        success: false,
        message: "email or password is incorrect !!!",
      });

    const token = user.generateJWTToken();
    res.status(200).json({
      success: true,
      token: token,
      id: user._id,
      admin: user.isAdmin,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: err.message,
    });
  }
};
