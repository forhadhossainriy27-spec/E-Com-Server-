const env = require("../config/env");
const AUTH = require("../constants/auth");

const setTokenCookie = (res, token) => {
  res.cookie(AUTH.COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: AUTH.COOKIE_MAX_AGE,
  });
};

module.exports = setTokenCookie;