var express = require('express');
var usrctrl = require('../controllers/controller');
var JWTHelper=require("../config/JWTHelper");
var approuter = express.Router();
approuter.post('/newUser',usrctrl.addnewuser);
approuter.post('/pic',usrctrl.uploadingimage);
approuter.get('/list',usrctrl.display);
approuter.get("/selecteduser/:userid",usrctrl.selectone);
approuter.put("/updateuser/:id",usrctrl.updateuser);
approuter.delete("/deleteduser/:id",usrctrl.remove);
approuter.post('/auth',usrctrl.authenticate);
approuter.get('/profile',JWTHelper.verifyToken,usrctrl.userprofile);

approuter.get("/form",usrctrl.fileuplaod);

//export approuters on server.js
module.exports=approuter;
