var mongoose = require("../db/db")

var freindsSchema = new mongoose.Schema({
  userId:String,
  userFriendsId:String,
  createTime:String,
  isEachOther:Number,
  updateTime:String
})

 var OrderModel = mongoose.model({"order",orderSchema});

module.exports = OrderModel
