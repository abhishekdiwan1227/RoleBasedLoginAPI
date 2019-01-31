var mongoose = require("mongoose"); 
var Schema = mongoose.Schema;

var TestSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    testDate: {
        type: Date,
        required: true,
    },
    maxMarks: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('test', TestSchema)