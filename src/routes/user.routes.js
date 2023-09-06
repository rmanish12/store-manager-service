const router = require("express").Router();
const UserController = require("../controller/user.controller");

router.get("/:id", UserController.getUserDetails);

module.exports = router;
