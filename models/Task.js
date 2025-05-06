const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name : {
        type:String,
        required:[true,'must give name'],
        maxlength:[20,'must be less than 20 characters'],
        trim:true
    },
    completed : {
        type:Boolean, 
        default:false,
    },
})

module.exports = mongoose.model('Task',TaskSchema)