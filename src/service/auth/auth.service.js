const AuthRepo = require("../../repository/auth.repo");

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

module.exports = { createUser };
