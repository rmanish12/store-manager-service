const { v4: uuidv4 } = require("uuid");
const Role = require("../models/role.model");

const createRole = ({ name, permissions }) => {
  const newRole = new Role({
    _id: uuidv4(),
    name,
    permissions
  });

  return newRole.save();
};

const findRolesById = roleIds =>
  Role.find({ _id: { $in: [...roleIds] } })
    .select({ _id: 1, name: 1 })
    .lean();

const findRolePermissions = roleIds =>
  Role.find({ _id: { $in: [...roleIds] } })
    // .select({ _id: 1, name: 0, permissions: 1 })
    .lean();

const getRoleDetails = roleId =>
  Role.findById(roleId).select({ _id: 1, name: 1, permissions: 1 }).lean();

module.exports = {
  createRole,
  findRolesById,
  findRolePermissions,
  getRoleDetails
};
