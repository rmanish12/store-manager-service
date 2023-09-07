const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const userExistsByEmail = email => User.exists({ email }).lean();

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

const loginUser = email =>
  User.findOne({ email })
    .select({ _id: 1, email: 1, password: 1, isActive: 1 })
    .lean();

module.exports = { createUser, loginUser, userExistsByEmail };
