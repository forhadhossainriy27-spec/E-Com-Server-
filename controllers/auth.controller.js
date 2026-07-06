const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");
const asyncHandler = require("../middleware/asyncHandler");
const ApiError = require("../utils/ApiError");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, phone } = req.body;

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