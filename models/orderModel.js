var mongoose = require('../db/db')

var orderSchema = new mongoose.Schema({
  orderNumber:String,
  price:Number,
  designerPhone:String,
  designerName:String,
  effectChartPhone:String,
  effectChartUserName:String,
  createTime:String,
  updateTime:String,
  endTime:String,
  payTime:String,
  orderStatus:Number,  //1，创建订单。2，已接单 3，建模 4，定模中 5，渲染中 6，后期 7，效果图交付中 8，未支付订单 9，订单完成
  payStatus:Number, // 1,未支付   2，支付一部分   3，完成支付
  payFirst:Number, //第一次支付金额
  payEnd:Number, //完成支付
  content:String,
  tag:String,//标签
})

var OrderModel =   mongoose.model({"order",orderSchema});
module.exports = OrderModel
