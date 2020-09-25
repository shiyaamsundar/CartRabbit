const  express = require('express')
const router = express.Router()
const {getuserbyid,getuser,getallusers,updateuser,bookinglist}=require("../controllers/user")
const {issignedin,isauthenticated,isadmin}=require('../controllers/auth')


//getuserid
router.param("userid",getuserbyid)

//user routes
router.get("/user/:userid",issignedin,isauthenticated,getuser)
router.put("/updateuser/:userid",issignedin,isauthenticated,updateuser)
router.get("bookings/user/:userid",issignedin,isauthenticated,bookinglist)
router.get("/users",getallusers)





module.exports=router