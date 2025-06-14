const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const { UnauthenticatedError, BadRequestError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJwt();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new UnauthenticatedError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const token = user.createJwt();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
    },
    token,
  });
};

module.exports = {
  register,
  login,
};
