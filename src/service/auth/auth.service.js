const AuthRepo = require("../../repository/auth.repo");
const ForbiddenError = require("../../errors/ForbiddenError");
const { generateToken } = require("../../utils/jwt");

const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  gender,
  roles
}) => {
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
  const user = await AuthRepo.loginUser(email);

  if (!user.isActive) {
    throw new ForbiddenError("Your account is not active");
  }

  if (password !== user.password) {
    throw new ForbiddenError("Incorrect email or password");
  }

  // eslint-disable-next-line no-underscore-dangle
  const token = generateToken({ id: user._id });

  return { token };
};

module.exports = { createUser, login };
