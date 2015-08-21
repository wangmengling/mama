var express = require('express');
var db = require('../db/db')
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  UserName:String,
  PassWord:String,
  Phone:String,
  Email:String,
})

 var UserModel = mongoose.model("UserModel",userSchema);

module.exports = UserModel
