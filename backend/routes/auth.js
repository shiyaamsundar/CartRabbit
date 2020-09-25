const  express = require('express')
const router = express.Router()
const {signout,signin,signup,issignedin}=require('../controllers/auth')

//sign in/up/out routes

router.get('/signout',signout)
router.post('/signin',signin)
router.post('/signup',signup)


module.exports = router