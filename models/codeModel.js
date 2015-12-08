var express = require('express');
// var mongoose = require('mongoose');
var mongoose = require('../db/db')

var codeSchema = new mongoose.Schema({
  phone:String,
  code:String,
  isValid:Boolean,
  createTime:Date
})

var CodeModel = mongoose.model("Code",codeSchema);
module.exports = CodeModel
