const objectMapper = require("object-mapper");

const mapUserDetails = userDetails => {
  const mapper = {
    _id: "id",
    email: "email",
    firstName: "firstName",
    lastName: "lastName",
    gender: "gender",
    roleInfo: {
      key: "roles[]",
      transform: val => val.name
    }
  };

  return objectMapper(userDetails, mapper);
};

const mapUserPermissionDetails = userDetails => {
  const mapper = {
    _id: "id",
    email: "email",
    isActive: "isActive",
    permissionInfo: {
      key: "permissions[]",
      transform: val => val.name
    }
  };

  return objectMapper(userDetails, mapper);
};

module.exports = { mapUserDetails, mapUserPermissionDetails };
