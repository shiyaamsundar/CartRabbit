const  express = require('express')
const { addbooking, allbookings } = require('../controllers/bookings')
const { getroombyid } = require('../controllers/room')
const { getuserbyid } = require('../controllers/user')
const {issignedin,isauthenticated,isadmin}=require('../controllers/auth')
const router = express.Router()

//getting user/id
router.param("roomid",getroombyid)
router.param("userid",getuserbyid)

//booking routes
router.post("/book/:userid/:roomid",addbooking)
router.get("/bookings/:userid",addbooking)


module.exports=router