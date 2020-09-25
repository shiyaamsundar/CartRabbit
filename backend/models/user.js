const mongoose=require('mongoose')
const crypto = require('crypto')
const uuid=require('uuid/v1')
const { ObjectId } = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        maxlength:32,
        trim: true
    },
    lastname:{
        type:String,
        maxlength:32,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },

    role:{
        type:Number,
        default:0
    },
    rooms:{
        type:Array,
        default:[],
    },

},{timestamps:true})

module.exports = mongoose.model('user',userSchema)