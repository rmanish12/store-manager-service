const User = require("../models/user.model");

const getUserDetails = userId =>
  User.findById(userId)
    .select({ email: 1, firstName: 1, lastName: 1, gender: 1, roles: 1 })
    .lean();

const getUserPermissionDetails = userId =>
  User.findById(userId)
    .select({ _id: 1, email: 1, roles: 1, isActive: 1 })
    .lean();

module.exports = { getUserDetails, getUserPermissionDetails };
