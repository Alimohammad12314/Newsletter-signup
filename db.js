const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.error(`connection error ${err}`)
})

const peopleschema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String
})

module.exports=mongoose.model("users",peopleschema)