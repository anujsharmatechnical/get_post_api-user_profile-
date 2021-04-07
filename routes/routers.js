var express = require('express');
var usrctrl = require('../controllers/loginLogoutController.js');
var usrctrl1 = require('../controllers/forgotPasswordController.js')
var JWTHelper=require("../config/JWTHelper");

//call the node mailer api here and its working 

// const  nodemailer  = require('../config/nodemailer.js');


var approuter = express.Router();

//all api calls inside loginLogoutController
approuter.post('/SignUp',usrctrl.addnewuser);
approuter.get('/list',usrctrl.display);
approuter.post('/Login',usrctrl.authenticate);
approuter.get('/profile',usrctrl.userprofile,JWTHelper.verifyToken);

//api call in forgot password from the file forgotPasswordapi

approuter.get('/forgot',usrctrl1.forgot)


//export approuters on server.js
module.exports=approuter;

    