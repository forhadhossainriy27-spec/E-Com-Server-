const asyncHandler = require("../middleware/asyncHandler");
const { registerService } = require("../services/auth.service");
const sendResponse = require("../utils/sendResponse");

const registerUser = asyncHandler(async (req, res) => {
  const { token, user } = await registerService(req.body);

  sendResponse({
    res,
    statusCode: 201,
    success: true,
    message: "User registered successfully.",
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

module.exports = {
  registerUser,
};