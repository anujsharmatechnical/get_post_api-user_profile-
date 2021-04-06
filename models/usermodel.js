const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require("../config/passportconfig");
var Userschema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
     password:{
        type:String,
        require:true

    }
   
})
Userschema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
       this.password=hash;
       this.saltstring=salt;
       next();
        })
    })

})
Userschema.methods.verifyPassword=function(password){
    return bcrypt.compareSync(password , this.password);

}


mongoose.model('user',Userschema);

