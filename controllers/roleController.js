var auth = require("../helpers/auth");
var roleModel = require("../models/rolesModel");
var mongoose = require("mongoose");

module.exports.addOne = (req, res, next) => {
    var role = new roleModel({
        _id: mongoose.Types.ObjectId(),
        role: req.body.RoleName,
        roleId: req.body.RoleId
    });
    user.save()
    .then(result => {
        res.status(200).json("New Role Added");
    })
    .catch(err => {
        res.status(501).json("Failed");
    })
};

module.exports.getAll = (req, res, next) => {
    roleModel.find({})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(501).json("Failed");
    });
};