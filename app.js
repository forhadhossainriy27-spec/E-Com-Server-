const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MERN Ecommerce API Running",
  });
});

app.use("/api/auth", authRoutes);

// Not Found Middleware
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

module.exports = app;