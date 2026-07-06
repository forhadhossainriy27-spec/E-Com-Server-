const express = require("express");
const router = express.Router();
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth.validator");

const {
  registerUser, loginUser, logoutUser, getCurrentUser,
} = require("../controllers/auth.controller");

const validate = require("../validators/validationResult");
const protect = require("../middleware/protect");
const authorize = require("../middleware/authorize");

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

router.post(
  "/logout",
  protect,
  logoutUser
);

// test authorization
router.get(
  "/admin",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

module.exports = router;