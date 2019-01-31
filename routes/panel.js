var express = require("express");
var router = express.Router();
var authorizationHelper = require("../helpers/authorizationHelper");
var userController = require("../controllers/userController");

router.use(authorizationHelper("Panel"));

router.route("/member").post(userController.addOne);

module.exports = router;