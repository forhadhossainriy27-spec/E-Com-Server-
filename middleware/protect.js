const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require("./asyncHandler");
const ApiError = require("../utils/ApiError");

const env = require("../config/env");
const AUTH = require("../constants/auth");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies[AUTH.COOKIE_NAME];

  if (!token) {
    throw new ApiError(401, "Unauthorized.");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    throw new ApiError(401, "User not found.");
  }

  if (!user.isActive) {
    throw new ApiError(403, "Your account has been deactivated.");
  }

  req.user = user;

  next();
});

module.exports = protect;