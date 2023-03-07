require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT } = process.env;
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  prod: {
    username: "iot_prod",
    password: "123456",
    database: "progressDev",
    host: "192.168.9.47",
    dialect: "mysql",
  },
};
