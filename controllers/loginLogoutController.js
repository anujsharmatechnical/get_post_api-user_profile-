require("../config/passportconfig");
require('../models/usermodel');
const mongoose = require('mongoose');
const passport = require("passport");
const passportlocal= require("passport-local");
//call mongoose model
var User = mongoose.model('user');
var path = require('path');

var multer = require('multer');
//jwt
var jwts = require('jsonwebtoken');

//adding a new user and saving to database from api signup
module.exports.addnewuser=(req,res)=>{
    var newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
       
        
 });
    return newUser.save().then((docs)=>{
         res.status(200).json({

          message:"data is insterd",
             data:docs,
             status:200,
             success:true
         });

    })
    .catch((err)=>{
        res.status(401).json({
            message:"there is error",
            error:err.message,
            success:false,

        })

    });
}

//listing all the user by using get api and function find{all}

module.exports.display=(req,res)=>{
    return User.find().then((docs)=>{
        res.status(200).json({
            message:'user is found',
            data:docs,
            success:true
        })

    })
    .catch((err)=>{
        res.status(401).json({
            message:'user not found',
            error:err.message,
            success:false,
        })

    })
}

//authentication on the time of login

module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) return res.status(404).json(err);
        if(user) return res.status(200).json({
            "token":jwts.sign({id:user._id},
              "JWTAUTENTICATION",
              {
                  expiresIn:"20m"

              })

        })

       if(info) return res.status(401).json(info);
    })(req,res,next);
}

//userprofile 


module.exports.userprofile=(req,res)=>{
    User.findOne({_id:req.body._id}).then((docs)=>{

return res.status(200).json({
    
    
    success:true,
    message:'Token verified',
    data:docs
})
    })
.catch((err)=>{
    res.status(404).json({
        success:false,
     message:'user is not found',
     err:err.message

    })
})
}



