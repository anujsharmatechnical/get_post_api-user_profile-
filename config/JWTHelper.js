//used jwt for the token
const jwt = require('jsonwebtoken');

//using the function verify token to verify the jwt token
module.exports.verifyToken = (req, res, next) => {
    var token;
    if('authorization' in req.headers){
        token = req.headers['authorization'].split(' ')[1];
        if(!token){
            res.status(401).json({
                auth: false,
                message: "Token is not authorized"
            });
        }
        else {
            jwt.verify(token, "JWTAUTENTICATION" , (err, user) => {
                if(err){
                    res.status(401).json({
                        auth: false,
                        message: "Token is not Generated"
                    });
                }
                else{
                    _id = jwt.decode(token);
                    res.status(200).json({
                        auth: true,
                        data: _id
                    });
                }
            })
        }
    }
}
