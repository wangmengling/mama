var express = require('express');
var db = require('../db/db')

var UserSchema = new mongoose.Schema({
  UserName:String,
  PassWord:String,
  Phone:String,
  Email:String,
})

var UserModel = db.model({"User",UserSchema});



UserModel.create({

})

module.exports = UserModel;
