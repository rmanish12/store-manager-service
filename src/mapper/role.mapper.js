const objectMapper = require("object-mapper");

const mapRoleDetails = userDetails => {
  const mapper = {
    _id: "id",
    name: "name",
    permissionInfo: {
      key: "permissions[]",
      transform: val => ({
        // eslint-disable-next-line no-underscore-dangle
        id: val._id,
        name: val.name
      })
    }
  };

  return objectMapper(userDetails, mapper);
};

module.exports = { mapRoleDetails };
