const router = require("express").Router();
const AuthController = require("../controller/auth.controller");

router.post("/register", AuthController.createUser);

module.exports = router;
