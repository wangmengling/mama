var UserDao    = require('../dao/userDao');


exports.index = function(req,res,next){

}
exports.addUser = function(req,res,next) {
  UserDao.addUser("wangmengling","123456",function (err) {
    console.log(err);
  })
}
