var express = require('express');
var router = express.Router();
var site = require('./controller/site')
var user = require('./controller/user')


router.get("/",site.index)
router.get("/user/addUser",user.addUser)
router.get("/user/login",user.login)
module.exports = router;
