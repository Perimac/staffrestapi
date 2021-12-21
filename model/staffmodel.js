const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    isOnPayroll:{
        type:Boolean,
        required:true
    },
},{timestamps: true})
module.exports = mongoose.model('staff',staffSchema);