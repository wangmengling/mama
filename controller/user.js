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
  var user = req.body
  console.log(user);
  console.log("sdfasdfa");
  UserDao.login(user.phone,user.passWord,function(err,users) {
    console.log(users)
    res.json(users);
  })
}
