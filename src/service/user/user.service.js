const UserRepo = require("../../repository/user.repo");
const RoleRepo = require("../../repository/role.repo");
const PermissionRepo = require("../../repository/permission.repo");
const {
  mapUserDetails,
  mapUserPermissionDetails
} = require("../../mapper/user.mapper");

const getUserDetails = async userId => {
  const userDetails = await UserRepo.getUserDetails(userId);
  const userRoles = await RoleRepo.findRolesById(userDetails.roles);
  userDetails.roleInfo = userRoles;

  return mapUserDetails(userDetails);
};

const getUserPermissionDetails = async userId => {
  const userDetails = await UserRepo.getUserPermissionDetails(userId);

  const rolePermissions = await RoleRepo.findRolePermissions(userDetails.roles);

  const permissions = new Set();
  rolePermissions.forEach(role => {
    role.permissions.forEach(permission => permissions.add(permission));
  });

  const userPermissions = await PermissionRepo.findAllPermissionsById([
    ...permissions
  ]);

  userDetails.permissionInfo = userPermissions;
  return mapUserPermissionDetails(userDetails);
};

module.exports = { getUserDetails, getUserPermissionDetails };
