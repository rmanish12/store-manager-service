const objectMapper = require("object-mapper");

const mapUserPermissionDetails = userDetails => {
  const mapper = {
    _id: "id",
    name: "name"
  };

  return objectMapper(userDetails, mapper);
};

module.exports = { mapUserPermissionDetails };
