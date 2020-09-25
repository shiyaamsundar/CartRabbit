const  express = require('express')
const router = express.Router()
const {issignedin,isauthenticated,isadmin}=require('../controllers/auth')
const {getuserbyid}=require('../controllers/user')
const {createroom,getroom,getroombyid,userrooms,getallrooms,updateroom,deleteroom}=require('../controllers/room')
const { route } = require('./auth')

const {addbooking}=require('../controllers/bookings')


//getting user/room
router.param("roomid",getroombyid)
router.param("userid",getuserbyid)

//room routes
router.post("/room/create/:userid",issignedin,isauthenticated,isadmin,createroom)
router.put("/update/:userid/:roomid",updateroom)
router.get("/getroom/:userid/:roomid",getroom)
router.get("/rooms/:userid",issignedin,isauthenticated,isadmin,getallrooms)
router.get("/rooms",getallrooms)
router.delete("/deleteroom/:userid/:roomid",deleteroom)
router.get("/rooms/user/:userid",userrooms)

module.exports=router