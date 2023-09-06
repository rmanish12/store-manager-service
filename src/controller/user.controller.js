const { StatusCodes } = require("http-status-codes");
const UserService = require("../service/user/user.service");

const getUserDetails = async (req, res) => {
  const { id: userId } = req.params;

  const userDetails = await UserService.getUserPermissionDetails(userId);
  return res.status(StatusCodes.OK).send(userDetails);
};

module.exports = { getUserDetails };
