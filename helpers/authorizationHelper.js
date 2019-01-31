var auth = require("./auth");
var mongoose = require("mongoose");
var userModel = require("../models/userModel");
var roleModel = require("../models/rolesModel");

module.exports = (scope) => {
    return (req, res, next) => {
        try {
        var token = auth.verifyToken(req.headers.token);
        roleModel.findOne({role: scope})
        .exec()
        .then(result => {
            userModel.findById(mongoose.Types.ObjectId(token._id))
            .exec()
            .then(user => {
                if(user && user.roleId == result.roleId) next();
                else {
                    res.json("Unauthorized");
                }
            })
            .catch(err => {
                res.json("Invalid User");
            })
        })
        .catch(err => {
            console.log(err);
            res.json("Invalid scope");
        });
        } catch(err)
        {
            res.json("Unauthorized");
        }
        
    }
}