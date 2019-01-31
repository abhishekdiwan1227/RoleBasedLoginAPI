var auth = require("../helpers/auth");
var userModel = require("../models/userModel");
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var randomString = require("randomstring");

module.exports.addOne = (req, res, next) => {
    var user = new userModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.Name,
        username: req.body.Username,
        password: randomString.generate(10),
        roleId: req.body.RoleId
    });
    user.save()
    .then(result => {
        res.status(200).json("User Registered");
    })
    .catch(err => {
        res.status(501).json("Failed");
    })
};

module.exports.getOne = (req, res, next) => {
    userModel.findOne({ username: req.body.Username })
    .exec()
    .then(result => {
        if (result) {
            if(result.authenticate(req.body.Password, result.password))
            {
                var token = auth.signToken(result._id.toString(), result.roleId);
                res.json("Logged In");
            }
            else 
            {
                res.json("Invalid Password");
            }
        }
        else {
            res.json("No user found");
        }
    })
    .catch(err => {
        console.log(err);
        res.status(501).json("Failed");
    });
};