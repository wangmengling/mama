var express = require('express');
// var mongoose = require('mongoose');
var mongoose = require('../db/db')

var userSchema = new mongoose.Schema({
  userName:String,
  passWord:String,
  phone:String,
  email:String,
  address:String,
  role:Number //1,设计师 2,效果图工作者 3,用户
})

var UserModel = mongoose.model("User",userSchema);

module.exports = UserModel
