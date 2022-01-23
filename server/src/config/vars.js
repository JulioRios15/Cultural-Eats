const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT || 3001,
    dbUri: process.env.MONGODB_URI || "mongodb://localhost/cultural-eats-db"
}