var express = require('express');
var db = require('../db/db')

var userSchema = new mongoose.Schema({
  userName:String,
  passWord:String,
  phone:String,
  email:String,
  role:Number,
})

 db.model({"User",userSchema});
