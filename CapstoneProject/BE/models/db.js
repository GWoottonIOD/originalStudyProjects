const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  multipleStatements: true
  // pool: {
  //   // max: dbConfig.pool.max,
  //   // min: dbConfig.pool.min,
  //   // acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle
  // }  
});

module.exports = connection;