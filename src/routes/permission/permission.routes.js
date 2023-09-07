const router = require("express").Router();
const PermissionController = require("../../controller/permission.controller");

router.post("/", PermissionController.createPermission);

module.exports = router;
