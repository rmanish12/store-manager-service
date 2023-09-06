const PermissionRepo = require("../repository/permission.repo");

const createPermission = async name => {
  const newPermission = await PermissionRepo.createPermission(name);

  return newPermission;
};

module.exports = { createPermission };
