
const Booking=require('../models/bookings')
const Room=require('../models/room')

exports.addbooking=(req,res)=>{
        req.body.userid=req.profile.userid
        req.body.roomid=req.profile._id
    
    const booking=new Booking(req.body)
    booking.save((err,book)=>{

        if(err){
            return res.status(400).json({
                err:"Not able to save user in db"
            })
        }
        console.log("added")
        res.json(book)
    })

}


  

exports.allbookings=(req,res)=>{

    Booking.find({'userid':req.profile._id}).exec((err,room)=>{
     if(err||!room)
     {
         return res.status(400).json({
             error:"No user found"
         })
     }
     res.json(room)
     
 })
 
 }

