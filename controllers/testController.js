var auth = require("../helpers/auth");
var testModel = require("../models/testModel");
var mongoose = require("mongoose");

module.exports.addOne = (req, res, next) => {
    var test = new testModel({
        _id: mongoose.Types.ObjectId(),
        testDate: Date.now(),
        maxMarks: req.body.MaxMarks,
        createdBy: req.body.CreatedBy
    });
    test. save()
    .then(result => {
        res.status(200).json("New Test Added");
    })
    .catch(err => {
        res.status(501).json("Failed");
    })
};

module.exports.getAll = (req, res, next) => {
    testModel.find({})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(501).json("Failed");
    });
};