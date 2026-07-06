const express = require("express");
const router = express.Router();
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth.validator");

const {
  registerUser, loginUser, getCurrentUser,
} = require("../controllers/auth.controller");

const validate = require("../validators/validationResult");
const protect = require("../middleware/protect");

router.post(
  "/register",
  registerValidator,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidator,
  validate,
  loginUser
);

router.get(
  "/me",
  protect,
  getCurrentUser
);

module.exports = router;