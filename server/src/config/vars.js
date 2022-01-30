const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT || 3001,
    dbUri: process.env.MONGODB_URI || "mongodb://localhost/cultural-eats-db",
    tokenPrivateKey: process.env.TOKEN_PRIVATE_KEY || `\n-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAKBgQCi663TydDJa5KbWA5/jbaoU8ShzKH7IjjcOGnrP3+YB43DS7Y/L3dOgFrzFfDwxYfaYkbiWn3ZwbClkCzNFMB5WBh4BvY3SSw1NdfGpf1ONecxSbgxJ214KcfFavG34JzmL9AXFKIEh+LNShQkfjHE+KPzZpQtW5QI+MW37q6/WwIDAQABAoGBAJAr9UBk6IFF04/qhbH0qz4cGvZ/ipwc9apTtc96+qODk7zOJDGYBIEQbuuMcBHxCz6DF205XQM1NufcRPkasxOFAGTifMNnOP60IC7zI3AX7eHaEmxeC71qDZbpkRAGhwrx5i0TFBe9JkdnosxpXp50t4IoqrsdiFu9ndw+xWGBAkEA0cWqPuWDcT/GUGVe/FIEjv1ozpwEaFUiqAIDY3V9HaSO8WYJgvEHq5UHdF49TVdvrL8ZiorsVwpYEJuxEWqXmwJBAMbS4I410T8PGRfRSYn9w/i3f3G2CIWNKXMxRQqNoKoj2ofJP8reDqhOBH1uO/7E/u+jS/KNp1ZMrDb44CdVU0ECQQCSvqpH8Zqv4KNEnoWCEYYq2U82KaJTsiraSP5B13C9Cd8NNAo3VZG+EDT0zPApaJ8ww0aEyoZmpU/R3nhR7LU9AkAcfjwQJUZHczJ1Z1jSnbtn+WQaN6wg94npKDZsvL85osm+i+jIeeo/1G5wS0vtxu2CCjToHcTNaU+E0UXOXTwBAkAiy6aQZlaEfyIYXUzdcjngEIKm4QAxZXcBSGjGqeLD+fA1kTZK0y1ggPCXDkBzqBz6Jh619WXzavSGms7btzGR\n-----END RSA PRIVATE KEY-----`,
    tokenPublicKey: process.env.TOKEN_PUBLIC_KEY || `\n-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCi663TydDJa5KbWA5/jbaoU8Sh\nzKH7IjjcOGnrP3+YB43DS7Y/L3dOgFrzFfDwxYfaYkbiWn3ZwbClkCzNFMB5WBh4\nBvY3SSw1NdfGpf1ONecxSbgxJ214KcfFavG34JzmL9AXFKIEh+LNShQkfjHE+KPz\nZpQtW5QI+MW37q6/WwIDAQAB\n-----END PUBLIC KEY-----`,
    tokenTtl: "2h",
    saltWorkFactor: process.env.SALT_WORK_FACTOR || 10,
    mealDBApiKey: process.env.MEAL_DB_API_KEY || 1
}