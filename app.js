const express = require("express");
const bodyparser = require("body-parser");

const https = require("https");
const { Auth } = require("request/lib/auth");
require('./db')
require('dotenv').config()
const userlist=require('./db')

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) => {
  var name1 = req.body.firstname
  var name2 = req.body.lastname
  var email1 = req.body.Email
  console.log(name1 + " " + name2 + " " + email1);
  userlist({
    fname:name1,
    lname:name2,
    email:email1
  }).save()
  .then(()=>{
    res.sendFile(__dirname+"/success.html")
  })
  .catch((err)=>{
    console.log(err)
    res.sendFile(__dirname+"/failure.html")
  })

})


app.listen(process.env.PORT || 3000, () => {
  console.log("server on port 3000");
})




