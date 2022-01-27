const jwt = require("jsonwebtoken");
const config = require("../config/vars");

function signToken({_id, email, username}){
    const payload = {_id, email, username};
    const privateKey = config.tokenPrivateKey;
    const expiredTime = config.tokenTtl;
    return jwt.sign({data: payload}, privateKey, { expiresIn: expiredTime });
}

module.exports = signToken;