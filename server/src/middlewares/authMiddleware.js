const { verifyToken } = require("../utils/jwt.utils");

function authMiddleware({req, res, next}){
    let token = req.body.token || req.query.token || req.headers["authorization"] || req.headers["Authorization"];

    if(req.headers["authorization"] || req.headers["Authorization"]){
        token = token.split(' ').pop().trim();
    }

    if(!token){
        return req;
    }

    try {
        const { data } = verifyToken(token);
        req.user = data;
    } catch (error) {
        console.log(error.message);
        console.log("Invalid Token");
    }

    return req;
}

module.exports = authMiddleware