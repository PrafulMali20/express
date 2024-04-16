const express = require('express') ;
const app = express(); 
const mongoose = require('mongoose') ;
require('dotenv').config()

mongoose.connect('mongodb://localhost:27017/').then(()=>{
  console.log("MongoDB is Connected")
}).catch((err)=>{
  console.log(err)
})



app.listen(3000,()=>{
  console.log("server is running")
})