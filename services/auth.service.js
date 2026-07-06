const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const generateToken = require("../utils/generateToken");

const registerService = async (userData) => {
  const { name, email, password, phone } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "Email already exists.");
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
  });

  const token = generateToken(user._id);

  return {
    token,
    user,
  };
};

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const token = generateToken(user._id);

  return {
    token,
    user,
  };
};

module.exports = {
  registerService, loginService,
};