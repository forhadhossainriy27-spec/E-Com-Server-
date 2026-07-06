const asyncHandler = require("../middleware/asyncHandler");
const { registerService } = require("../services/auth.service");

const registerUser = asyncHandler(async (req, res) => {
  const { token, user } = await registerService(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully.",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

module.exports = {
  registerUser,
};