var UserModel = require("../models/userModel");

//添加用户
exports.addUser = function (userName,passWord,callback) {
  var user         = new UserModel();
  user.UserName   = userName;
  user.PassWord   = passWord;
  user.save(callback);
  console.log(userName);
}
