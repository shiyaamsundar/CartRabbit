const Room=require('../models/room')
const User=require('../models/user')

const express = require('express')
const router = express.Router()


//used by parm
exports.getroombyid=(req,res,next,id)=>{
  Room.findById(id).exec((err,room)=>{
      if(err||!room)
      {
          return res.status(400).json({
              error:"No user found"
          })
      }
      req.profile=room
      next()
  })
}

//getting room by id
exports.getroom=(req,res)=>{


  Room.findById(req.profile.id).exec((err,room)=>{
    if(err||!room)
    {
        return res.status(400).json({
            error:"No user found"
        })
    }
    else{
      res.json(room)
    }
    
})

}




//creatingroom
exports.createroom=(req,res)=>{

  const room=new Room(req.body)

  room.save((err,room)=>{

      if(err){
          return res.status(400).json({
              err:"Not able to save user in db"
          })
      }
    
      res.json(room)
  })


}





//all rooms
    exports.getallrooms=(req,res)=>{
      Room.find().exec((err,rooms)=>{
          if(err||!rooms){
              return res.status(400).json({
                  error:"No users found"
              })
          }
          res.json(rooms)
      })
         };

//updating room
    exports.updateroom=(req,res)=>{
      Room.findByIdAndUpdate(
          {_id:req.profile._id},
          {$set:req.body},
          {new:true,useFindAndModify:false},(err,room)=>{
              if(err){
                  return res.status(400).json({
                      error:"Unable to process your request"
                  })
              }
              res.json(room)

          }
        
      )

  
}
  
//deleting room
  exports.deleteroom=(req,res)=>{

    let room=req.room

    Room.findOneAndDelete({'_id':req.profile._id},function(err){
      if(err){
        console.log(err)
      }
      res.json({
        message:'deleted',
        room
      })
    })

  }

  
exports.userrooms=(req,res)=>{

   Room.find({'userid':req.profile._id}).exec((err,room)=>{
    if(err||!room)
    {
        return res.status(400).json({
            error:"No user found"
        })
    }
    res.json(room)
    
})


}