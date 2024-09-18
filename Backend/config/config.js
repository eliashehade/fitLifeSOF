require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  dbConfig: {
    host: process.env.DB_SERVER, // MySQL host
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
