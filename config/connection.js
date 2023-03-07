const Sequelize = require("sequelize");
require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_DIALECT } = process.env;

const progressDev = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false,
});
// const progressDev = new Sequelize(
//   config.prod.database,
//   config.prod.username,
//   config.prod.password,
//   config.prod
// );

module.exports = { progressDev };
