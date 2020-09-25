const User=require('../models/user')
const Room=require('../models/room')
const express = require('express')
const router = express.Router()
const Booking=require('../models/bookings')

//used by param
exports.getuserbyid=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err||!user)
        {
            return res.status(400).json({
                error:"No user found"
            })
        }
        req.profile=user
        next()
    })
}

//getting user data
exports.getuser=(req,res)=>{

    return res.json(req.profile)
}



exports.getallusers=(req,res)=>{
   User.find().exec((err,users)=>{
       if(err||!users){
           return res.status(400).json({
               error:"No users found"
           })
       }
       res.json(users)
   })
      };
      
//updating user

exports.updateuser=(req,res)=>{
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set:req.body},
        {new:true,useFindAndModify:false},(err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"Unable to process your request"
                })
            }
            res.json(user)
        }
    )
}



exports.bookinglist=(req,res)=>{
    Booking.find({user:req.profile._id}).populate("user","_id name email phone")
    .exec((err,bookings)=>
    {if(err)
    {
        return res.status(400).json({
            error:"No bookings found"
        })
    }
    return res.json(bookings)
}
    )
}
