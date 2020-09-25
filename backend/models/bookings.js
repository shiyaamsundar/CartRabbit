const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema
const roomSchema=require('./room')
const userSchema=require('./user')

var bookingsSchema=new mongoose.Schema({
    roomid:{type:String},
    name:{type: String},
    phone: {type:Number},
    email:{type:String},
    from:{type:Date},
    to:{type: Date},
    bookieid:{type:String}

},{timestamps:true})

module.exports = mongoose.model("bookings",bookingsSchema)