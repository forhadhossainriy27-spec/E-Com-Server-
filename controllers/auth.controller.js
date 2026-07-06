const asyncHandler = require("../middleware/asyncHandler");
const { registerService, loginService } = require("../services/auth.service");
const sendResponse = require("../utils/sendResponse");
const setTokenCookie = require("../utils/setTokenCookie");

const registerUser = asyncHandler(async (req, res) => {
  const { token, user } = await registerService(req.body);

    // Set HTTP-only cookie
  setTokenCookie(res, token);

  sendResponse({
    res,
    statusCode: 201,
    success: true,
    message: "User registered successfully.",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { token, user } = await loginService(req.body);

  setTokenCookie(res, token);

  sendResponse({
    res,
    statusCode: 200,
    success: true,
    message: "Login successful.",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  sendResponse({
    res,
    statusCode: 200,
    success: true,
    message: "Current user fetched successfully.",
    data: {
      user: req.user,
    },
  });
});

module.exports = {
  registerUser, loginUser, getCurrentUser
};