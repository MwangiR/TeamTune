const express = require("express");

const departmentRouter = require("./department");
const roleRouter = require("./roles");
const employeeRouter = require("./employee");

const app = express();

app.use("/department", departmentRouter);
app.use("/roles", roleRouter);
app.use("/employee", employeeRouter);

module.exports = app;
