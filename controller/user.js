var UserDao    = require('../dao/userDao');


exports.index = function(req,res,next){

}
exports.addUser = function(req,res,next) {
  UserDao.addUser("wangmengling","123456",'15828581089',function (err) {
    if (err) {
      return next(err);
    }
    UserDao.getUserByPhone('15828581089',function(err,user){
      console.log(user);
    })
  })
}

exports.login = function(req,res,next) {
  UserDao.login('15828581089','123456',function(err,user) {
    res.json(user);
  })
}
