require("../config/passportconfig");
require('../models/usermodel');
const mongoose = require('mongoose');
const passport = require("passport");
const passportlocal= require("passport-local");
const nodemailer = require("nodemailer")

//call mongoose model
var User = mongoose.model('user');
var path = require('path');

var multer = require('multer');
//jwt
var jwts = require('jsonwebtoken');

//function call
module.exports.forgot=(req,res)=>{
    User.findOne({email:req.body.email}).then((docs)=>{
        if(docs === null ){
            return res.status(404).json({
            
                message:'Data not found ',
                // data:docs,
                // success:true
            })
        }
        else{
            return res.status(200).json({
            
                message:'Email has been sent',
                data:docs,
                success:true
            })
        }
        
        // return res.status(200).json({
            
        //     message:'Email has been sent',
        //     data:docs,
        //     success:true
        // })

    })
    .catch((err)=>{
        res.status(401).json({
            message:'user not found',
            error:err.message,
            success:false,
        })

    })
}
