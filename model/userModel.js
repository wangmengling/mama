var express = require('express');
var db = require('../db/db')

var userSchema = new mongoose.Schema({
  UserName:String,
  PassWord:String,
  Phone:String,
  Email:String,
})

 db.model({"UserModel",userSchema});
