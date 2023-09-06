const RoleService = require("../service/role.service");

const createRole = async (req, res) => {
  const { name, permissions } = req.body;

  const newRole = await RoleService.createRole({
    permissions,
    name
  });
  return res.status(201).send(newRole);
};

const getRoleDetails = async (req, res) => {
  const { id: roleId } = req.params;

  const roleDetails = await RoleService.getRoleDetails(roleId);
  return res.status(200).send(roleDetails);
};

module.exports = { createRole, getRoleDetails };
