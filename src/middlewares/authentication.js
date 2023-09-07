const { decodeToken } = require("../utils/jwt");
const redisClient = require("../config/redis");
const UnauthorizedError = require("../errors/UnauthorizedError");
const ForbiddenError = require("../errors/ForbiddenError");
const { getUserPermissionDetails } = require("../service/user/user.service");

const authenticateUser = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  try {
    if (!bearerToken) throw new UnauthorizedError("Unauthorized User");
    const authToken = bearerToken.substring(7);
    const redisValue = await redisClient.get(authToken);
    if (redisValue === null) {
      throw new UnauthorizedError("Unauthorized User");
    }
    const payload = decodeToken(authToken);
    const userDetails = await getUserPermissionDetails(payload.id);

    if (!userDetails.isActive) {
      throw new ForbiddenError("Your account is not active");
    }
    req.user = { ...userDetails, token: authToken };
    return next();
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

module.exports = authenticateUser;
