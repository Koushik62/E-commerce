const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path   = require("path");

//Data base connect with mongodb
mongoose.connect("mongodb+srv://koushik:Kohli@98@cluster0.pbwulz9.mongodb.net/e-commerce");


//API creation

app.get("/",(req,res)=>{
    res.send("Express App is Running");
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on Port "+port)
    }
    else{
        console.log("Error :"+error);
    }
})