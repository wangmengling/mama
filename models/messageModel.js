var mongoose = require("../db/db")

var messageSchema = new mongoose.Schema({
  messageId:String
  messageContent:String,
  messageStatues:Number,
  messageCreteTime:String,
  messageDeliveryTime:String,
  messageType:String,
  messageFromUserId:String,
  messageToUserId:String,
})

var MessageModel = new mongoose.model("message",messageSchema);
module.exports = MessageModel
