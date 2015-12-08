var UserDao    = require('../dao/userDao');
var CodeDao    = require('../dao/codeDao');


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
  // console.log(user);
  res.json({ error: 'message' })
  UserDao.login(user.phone,user.passWord,function(err,users) {
    res.json(users);
  })
}

exports.getCode = function(req,res,next){
  var phone = req.body.phone
  console.log(phone);
  res.json({ code: '123456' })
}
