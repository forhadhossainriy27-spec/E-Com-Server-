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

module.exports = {
  registerService,
};