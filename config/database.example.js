const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tu contraseña",
  database: "tu base de datos", // use databse X
});

db.connect();

module.exports = db;
