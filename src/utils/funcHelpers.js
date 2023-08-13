const connection = require("./dbconnect");
const { promptUser } = require("./utility_functions");

// View All Departments
const viewAllDepartments = (callback) => {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    // promptUser();
    callback();
  });
};

// View All Roles
const viewAllRoles = (callback) => {
  connection.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
};

// View All Employees
const viewAllEmployees = (callback) => {
  connection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
};
