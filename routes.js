var express = require('express');
var router = express.Router();
var site = require('./controller/site')
var user = require('./controller/user')


router.get("/",site.index)
router.get("/user/addUser",user.addUser)
router.get("/user/login",user.login)
router.post("/user/login",user.login)
router.get("/user/getCode",user.getCode)
router.post("/user/getCode",user.getCode)
module.exports = router;
