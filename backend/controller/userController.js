const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (res, req) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Enter info fields are empty" });
  }

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
};
const userLogin = async (res, req) => {};
const getUser = async (res, req) => {};

module.exports = { userSignUp, userLogin, getUser };
