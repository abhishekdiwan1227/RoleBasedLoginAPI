var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

var UserSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    roleId: {
        type: Number,
        required: true,
    }
});

UserSchema.methods = {
    authenticate: (plainTextPassword, storedPassword) => {
        return plainTextPassword == storedPassword;
    }
}

module.exports = mongoose.model('user', UserSchema)