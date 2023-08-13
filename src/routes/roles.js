const rs = require("express").Router();
const connection = require("../utils/dbconnect");

rs.get("/", (req, res) => {
  connection.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = rs;
