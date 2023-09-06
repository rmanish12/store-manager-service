const PermissionService = require("../service/permission.service");

const createPermission = async (req, res) => {
  const { name } = req.body;
  const permission = await PermissionService.createPermission(name);

  return res.status(201).send(permission);
};

module.exports = { createPermission };
