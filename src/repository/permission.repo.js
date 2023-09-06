const { v4: uuidv4 } = require("uuid");
const Permissions = require("../models/permission.model");

const createPermission = name => {
  const newPermission = new Permissions({
    _id: uuidv4(),
    name
  });

  return newPermission.save();
};

const findAllPermissionsById = idList =>
  Permissions.find({ _id: { $in: [...idList] } })
    .select({ _id: 1, name: 1 })
    .lean();

module.exports = { createPermission, findAllPermissionsById };
