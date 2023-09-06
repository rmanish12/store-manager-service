const { StatusCodes } = require("http-status-codes");
const AuthService = require("../service/auth/auth.service");
const successMessage = require("../utils/successMessage");

const createUser = async (req, res) => {
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
};

module.exports = { createUser };