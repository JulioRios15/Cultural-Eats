const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT || 3001,
    dbUri: process.env.MONGODB_URI || "mongodb://localhost/cultural-eats-db",
    tokenPrivateKey: process.env.TOKEN_PRIVATE_KEY || "private-key",
    tokenPublicKey: process.env.TOKEN_PUBLIC_KEY || "public-key",
    tokenTtl: "2h",
    saltWorkFactor: process.env.SALT_WORK_FACTOR || 10,
}