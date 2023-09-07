const PermissionRepo = require("../repository/permission.repo");
// const { mapUserPermissionDetails } = require("../mapper/permission.mapper");

const createPermission = async name => {
  await PermissionRepo.createPermission(name);
};

module.exports = { createPermission };
