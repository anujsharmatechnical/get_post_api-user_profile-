var express = require('express');
var usrctrl = require('../controllers/controller');
var JWTHelper=require("../config/JWTHelper");
var approuter = express.Router();

//all api calls
approuter.post('/SignUp',usrctrl.addnewuser);
approuter.get('/list',usrctrl.display);
approuter.post('/Login',usrctrl.authenticate);
approuter.get('/profile',usrctrl.userprofile,JWTHelper.verifyToken);


//export approuters on server.js
module.exports=approuter;
