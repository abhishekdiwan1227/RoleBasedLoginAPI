var auth = require("../helpers/auth");
var userModel = require("../models/userModel");
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs")
var express = require("express");

module.exports.addOne = (req, res, next) => {
    var user = new userModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.Name,
        username: req.body.Username,
        password: bcrypt.hashSync(req.body.Password, bcrypt.genSaltSync(10))
    });
    user.save()
    .then(result => {
        res.status(200).json();
    })
    .catch(err => {
        res.status(501).json("Failed");
    })
};

module.exports.getOne = (req, res, next) => {
    userModel.findOne({ username: req.body.Username, password: req.body.Password })
    .exec()
    .then(result => {
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.json("No user found");
        }
    })
    .catch(err => {
        console.log(err);
        res.status(501).json("Failed");
    });
    auth.signToken("1234123", "Admin");
};