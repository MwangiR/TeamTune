const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prodigy@249",
  database: "employee_db",
});

module.exports = connection;
