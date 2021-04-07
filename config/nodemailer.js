const { startSession } = require("mongoose");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:"gmail",
    secure:false,
    port:25,
    auth:{
        user:"anuj.appsmaven@gmail.com",
        pass:"AppsMaven@1137"
    },
    tls:{
        rejectUnauthorized:false
    }
});
const mailOptions = {
    from:"anuj.appsmaven@gmail.com",
    to:"anuj19sharma29@gmail.com",
    subject:"sending email for password reset",
    text:"password reset linkk"
};

module.exports.nodemailer=transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("email send"+info.response);
    }
});