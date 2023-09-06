const ForbiddenError = require("../errors/ForbiddenError");

const authorization = permissionRequired => async (req, res, next) => {
  try {
    if (req.user.permissions.includes(permissionRequired)) next();
    throw new ForbiddenError(
      "You do not have the priviledge for this operation"
    );
  } catch (err) {
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      status: err.status,
      errors: [
        {
          message: err.message
        }
      ]
    });
  }
};

module.exports = authorization;
