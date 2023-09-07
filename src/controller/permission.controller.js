const { StatusCodes } = require("http-status-codes");
const PermissionService = require("../service/permission.service");
const successMessage = require("../utils/successMessage");

const createPermission = async (req, res) => {
  const { name } = req.body;
  await PermissionService.createPermission(name);

  return res
    .status(StatusCodes.CREATED)
    .send(successMessage({ entity: "Permission", action: "created" }));
};

module.exports = { createPermission };
