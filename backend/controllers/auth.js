const express = require('express')
const User=require('../models/user')
const jwt=require('jsonwebtoken')
const expressjwt=require('express-jwt')
require('dotenv').config()
exports.signout=(req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"User signout successfully"
    })
}

exports.signin=(req,res)=>{
    const {email,password}=req.body

    User.findOne({email},(err,user)=>{

        if(err || !user){
           return res.status(400).json({
                error:"User doesnt exist"
            })
        }
        if(user.password!=password){
            return res.status(401).json({
                error:"Email and password dosent match"
            })
        }

        const token=jwt.sign({_id:user._id},process.env.SECRET)

        res.cookie("token",token,{expire:new Date()+99})

        const {_id,name,email,role}=user
        return res.json({token,user:{
            id:_id,
            name:name,
            email:email,
            role:role
        }})

    })
}

exports.signup=(req,res)=>{
    const user=new User(req.body)
    user.save((err,user)=>{

        if(err){
            return res.status(400).json({
                err:"Not able to save user in db"
            })
        }
        res.json({
            name:user.name,
            email:user.email,
            id:user._id})
    })
}



exports.issignedin=expressjwt({
    secret:process.env.SECRET,
    userProperty:"auth"

})



exports.isauthenticated=(req,res,next)=>{
    let checker=req.profile && req.auth && req.profile._id==req.auth._id

    if(!checker){
        return res.status(403).json({
            error:"ACCESS DENIED"
        })
    }
    next()

}


exports.isadmin=(req,res,next)=>{
    if(req.profile.role===0)
    {
        return res.status(403).json({
            error:"You are not a ADmin"
        })
    }

    next()
}