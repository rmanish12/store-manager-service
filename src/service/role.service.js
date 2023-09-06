const PermissionRepo = require("../repository/permission.repo");
const RoleRepo = require("../repository/role.repo");
const { mapRoleDetails } = require("../mapper/role.mapper");

const createRole = async ({ name, permissions }) => {
  // const permissions =
  // await PermissionRepo.findAllPermissionsById(permissionList);

  const newRole = await RoleRepo.createRole({ name, permissions });
  return newRole;
};

const getRoleDetails = async roleId => {
  const roleDetails = await RoleRepo.getRoleDetails(roleId);

  const rolePermissions = await PermissionRepo.findAllPermissionsById(
    roleDetails.permissions
  );

  roleDetails.permissionInfo = rolePermissions;
  return mapRoleDetails(roleDetails);
};

module.exports = { createRole, getRoleDetails };
