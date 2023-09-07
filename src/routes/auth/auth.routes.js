const router = require("express").Router();
const { validateSchema } = require("../../config/ajv");
const AuthSchema = require("./auth.schema");
const AuthController = require("../../controller/auth.controller");

router.post(
  "/register",
  validateSchema([{ data: "body", schema: AuthSchema.createUserBody }]),
  AuthController.createUser
);

router.post(
  "/login",
  validateSchema([{ data: "body", schema: AuthSchema.loginBody }]),
  AuthController.loginUser
);

router.get("/logout", AuthController.logoutUser);

module.exports = router;
