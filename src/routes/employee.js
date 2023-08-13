const ey = require("express").Router();
const connection = require("../utils/dbconnect");

ey.get("/", (req, res) => {
  connection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = ey;
