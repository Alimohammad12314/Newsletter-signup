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
    fname:{
        type:String,
        required:[true,"First name is mandatory"]
    },
    lname:{
        type:String,
        required:[true,"First name is mandatory"]
    },
    email:{
        type:String,
        required:[true,"First name is mandatory"]
    }
})

module.exports=mongoose.model("users",peopleschema)
