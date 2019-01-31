var jwt = require("jsonwebtoken");
//var expressjwt = require("expess-jwt");
var config = require("../config/keys");
//var checkToken = expressjwt({secret: config.secrets.jwt});

module.exports.verifyToken = (token) => {
    return jwt.verify(token ,config.secrets.jwt);
};

module.exports.signToken = (id, role) => {
    return jwt.sign({
        _id: id,
        scope: role},
        config.secrets.jwt,
        {expiresIn: config.secrets.expiration}
    );
};