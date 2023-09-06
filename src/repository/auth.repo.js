const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const createUser = ({
  email,
  password,
  firstName,
  lastName,
  gender,
  roles
}) => {
  const newUser = new User({
    _id: uuidv4(),
    email,
    password,
    firstName,
    lastName,
    gender,
    roles
  });

  return newUser.save();
};

module.exports = { createUser };
