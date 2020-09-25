
const express=require("express");
const cors = require('cors');
const mongoose=require("mongoose");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const authroute=require('./routes/auth')
const userroute=require('./routes/user')
const roomroute=require('./routes/rooms')
const bookroute=require('./routes/booking')
require('dotenv').config()





const app=express()
const port=process.env.PORT||5000;

//middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors());



app.use("/api",authroute)
app.use("/api",userroute)
app.use("/api",roomroute)
app.use("/api",bookroute)

//dbconnection
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{


    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("mongo db connected successfully");
})

app.listen(port,()=>{
    console.log(`Server is running in port:${port}`)
})


