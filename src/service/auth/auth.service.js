const isEmpty = require("lodash.isempty");
const AuthRepo = require("../../repository/auth.repo");
const ForbiddenError = require("../../errors/ForbiddenError");
const { generateToken } = require("../../utils/jwt");
const redis = require("../../config/redis");
const ConflictError = require("../../errors/ConflictError");
const NotFoundError = require("../../errors/NotFoundError");

const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  gender,
  roles
}) => {
  const userExists = await AuthRepo.userExistsByEmail(email);

  if (!isEmpty(userExists)) {
    throw new ConflictError("User with given email already exists");
  }

  await AuthRepo.createUser({
    email,
    password,
    firstName,
    lastName: lastName || "",
    gender: gender || "",
    roles: roles || []
  });
};

const login = async ({ email, password }) => {
  const userExists = await AuthRepo.userExistsByEmail(email);

  if (isEmpty(userExists)) {
    throw new NotFoundError("User with given email does not exist");
  }

  const user = await AuthRepo.loginUser(email);

  if (!user.isActive) {
    throw new ForbiddenError("Your account is not active");
  }

  if (password !== user.password) {
    throw new ForbiddenError("Incorrect email or password");
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = generateToken({ id: user._id });
  await redis.set(token, JSON.stringify(new Date()));

  return { token };
};

const logout = async token => {
  await redis.del(token);
};

module.exports = { createUser, login, logout };
