const User = require("../models/auth.model");
const jwt = require("jsonwebtoken");

const maxAge = 10 * 60;

const handleErrors = (err) => {
  let errors = { email: "", password: "" };
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  //incorrect email -login
  if (err.message === "Incorrect email") {
    errors.email = "email is not registered";
  }
  //incorrect password -login
  if (err.message === "Incorrect password") {
    errors.password = "password is incorrect";
  }
  return errors;
};

const createJwtToken = (id) => {
  return jwt.sign({ id }, "secret key", {
    expiresIn: maxAge,
  });
};
const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    //const token = createJwtToken(user._id);
    //res.cookie("jwt", token);
    res.status(200).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createJwtToken(user._id);
    res.cookie("jwt", token);
    res.status(200).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json("user logged out");
  } catch (error) {
    res.status(400).json({ error });
  }
};
module.exports = {
  signup,
  login,
  logout,
};
