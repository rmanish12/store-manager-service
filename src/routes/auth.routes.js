const router = require("express").Router();
const AuthController = require("../controller/auth.controller");

router.post("/register", AuthController.createUser);

router.post("/login", AuthController.loginUser);

module.exports = router;
