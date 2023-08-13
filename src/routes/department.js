const dp = require("express").Router();
const connection = require("../utils/dbconnect");

dp.get("/", (req, res) => {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = dp;
