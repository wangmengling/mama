var UserModel = require("../models/userModel");

//添加用户
exports.addUser = function (userName,passWord,phone,callback) {

  var user         = new UserModel();
  user.userName   = userName;
  user.passWord   = passWord;
  user.role = 1;
  user.phone = phone;
  user.save(callback);
}

exports.getUserByPhone = function (phone,callback){
    UserModel.find({ phone: 'john'}, function (err, docs) {
      callback(err,docs)
    });
}

exports.login = function(phone,passWord,callback){
  UserModel.findOne({phone:phone,passWord:passWord},'userName',function(err,user){
    callback(err,user)
  })
}
