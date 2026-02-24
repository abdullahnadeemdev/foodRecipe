const express = require("express");
const {
  userSignUp,
  userLogin,
  getUser,
} = require("../controller/userController");

const router = express.Router();
router.post("/signUp", userSignUp);
router.post("/login", userLogin);
router.get("/user/:id", getUser);
module.exports = router;
