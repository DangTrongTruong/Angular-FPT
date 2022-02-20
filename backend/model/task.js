const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
    },
    finnishAt:{
        type: Date,
    },
    project:{
      type: mongoose.Schema.ObjectId,
      ref: "Project",
      require: true,
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        require: true,
    },
    status:{
        type:String,
        required: true,
        default: "no status"
    }

})

module.exports = mongoose.model('Task',taskSchema)
