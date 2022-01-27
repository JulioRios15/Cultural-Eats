const config = require('../config/vars');


function authMiddleware({req, res, next}){
    let token = req.body.token || req.query.token || req.headers["authorization"] || req.headers["Authorization"];

    if(req.headers["authorization"] || req.headers["Authorization"]){
        token = token.split(' ').pop().trim();
    }

    if(!token){
        return req;
    }

    try {
        const publicKey = config.tokenPublicKey;
        const expiredTime = config.tokenTtl;
        const { data } = jwt.verify(token, publicKey, { maxAge: expiredTime });
        req.user = data;
    } catch (error) {
        console.log("Invalid Token");
    }
}

module.exports = authMiddleware