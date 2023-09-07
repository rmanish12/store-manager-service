const { StatusCodes } = require("http-status-codes");
const AuthService = require("../service/auth/auth.service");
const successMessage = require("../utils/successMessage");
const sendResponse = require("../utils/sendResponse");

const createUser = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, gender, roles } = req.body;

    await AuthService.createUser({
      email,
      password,
      firstName,
      lastName,
      gender,
      roles
    });

    return res
      .status(StatusCodes.CREATED)
      .send(successMessage({ action: "Created", entity: "User" }));
  } catch (err) {
    return next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await AuthService.login({ email, password });

    return res.status(StatusCodes.OK).send(sendResponse({ ...user }));
  } catch (err) {
    return next(err);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    const { token } = req.user;
    await AuthService.logout(token);

    return res.status(StatusCodes.OK).send();
  } catch (err) {
    return next(err);
  }
};

module.exports = { createUser, loginUser, logoutUser };
