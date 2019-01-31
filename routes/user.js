var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

router.route("/login").post(userController.getOne);

router.route("/register").post(userController.addOne);

module.exports = router;