var express = require("express");
var router = express.Router();
var authorizationHelper = require("../helpers/authorizationHelper");
var userController = require("../controllers/userController");
var roleController = require("../controllers/roleController");

router.use(authorizationHelper("Admin"));

router.route("/role").post(userController.addOne);

router.route("/roles").get(roleController.getAll);

module.exports = router;