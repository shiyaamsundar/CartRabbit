const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema;

var roomSchema=new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    contact: { type:Number,required: true },
    userid:{type:String},
    email: { type:String, required: true },
    price:{type: Number,required:true},
    avab:{type: Number,required:true,trim:true},
    photo:{type:String},
    desc:{type:String},

},{timestamps:true})

module.exports = mongoose.model('rooms',roomSchema)