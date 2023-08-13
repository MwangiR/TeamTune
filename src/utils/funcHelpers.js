const dbConnection = require("./dbconnect");

// View All Departments
const viewAllDepartments = (callback) => {
  dbConnection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    // promptUser();
    callback();
  });
};

// View All Roles
const viewAllRoles = (callback) => {
  dbConnection.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
};

// View All Employees
const viewAllEmployees = (callback) => {
  dbConnection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
};

//add a department
const includeDepartment = (newDP) => {
  dbConnection.query(
    `INSERT INTO department (name) VALUES ('${newDP.department}')`,
    (err, results) => {
      if (err) throw err;
      console.info(`${newDP.name} added.`);
    },
  );
};

//add a role
const includeRole = (newRole) => {
  dbConnection.query(
    `INSERT INTO role (title, salary, department_id) VALUES ('${newRole.title}', '${newRole.salary}', '${newRole.department_id}')`,
    (err, results) => {
      if (err) throw err;
      console.info(`${newRole.title} added.`);
    },
  );
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  includeDepartment,
  includeRole,
};
