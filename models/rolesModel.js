var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    role: {
        type: String,
        required: true,
        unique: true
    },
    roleId: {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('role', RoleSchema)