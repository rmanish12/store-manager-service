const router = require("express").Router();
const RoleController = require("../controller/role.controller");

router.post("/", RoleController.createRole);

router.get("/:id", RoleController.getRoleDetails);

module.exports = router;
