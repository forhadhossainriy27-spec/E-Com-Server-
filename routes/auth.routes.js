const express = require("express");
const router = express.Router();
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth.validator");

const {
  registerUser, loginUser,
} = require("../controllers/auth.controller");

const validate = require("../validators/validationResult");

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

module.exports = router;