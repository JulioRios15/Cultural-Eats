const jwt = require("jsonwebtoken");
const config = require("../config/vars");

function signToken({_id, email, username}){
    const payload = {_id, email, username};
    const privateKey = config.tokenPrivateKey;
    const expiredTime = config.tokenTtl;
    return jwt.sign({data: payload}, privateKey, { expiresIn: expiredTime, algorithm: "RS256" });
}

function verifyToken(token){
    const maxAge = config.tokenTtl;
    const publicKey = config.tokenPublicKey;

    return jwt.verify(token, publicKey, {maxAge});
}

module.exports = {
    signToken,
    verifyToken
};