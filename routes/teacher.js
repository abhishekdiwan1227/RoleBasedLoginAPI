var express = require("express");
var router = express.Router();
var authorizationHelper = require("../helpers/authorizationHelper");
var testController = require("../controllers/testController");

router.use(authorizationHelper("Teacher"));

router.route("/test").post(testController.addOne);

module.exports = router;