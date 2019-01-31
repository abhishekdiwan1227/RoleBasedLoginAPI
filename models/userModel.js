var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

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
    }
});

UserSchema.methods = {
    authenticate: (plainTextPassword) => {
        return bcrypt.compareSync(plainTextPassword, this.password);
    }
}

module.exports = mongoose.model('user', UserSchema)