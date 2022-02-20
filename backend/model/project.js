const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    teamSize:{
        type:Number,
        required: true,
    },
    startDate:{
      type: Date,
      default: Date.now,
    },

})

module.exports = mongoose.model('Project',projectSchema)
