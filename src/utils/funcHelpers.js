const dbConnection = require("./dbconnect");

// View All Departments
const viewAllDepartments = (callback) => {
  const sql = "SELECT * FROM department";
  dbConnection.query(sql, (err, results) => {
    if (err) throw err;
    console.table(results);
    // promptUser();
    callback();
  });
};

// View All Roles
const viewAllRoles = (callback) => {
  const sql = "SELECT * FROM role";
  dbConnection.query(sql, (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
};

// View All Employees
const viewAllEmployees = (callback) => {
  const sql = "SELECT * FROM employee";
  dbConnection.query(sql, (err, results) => {
    if (err) throw err;
    console.table(results);
    callback();
  });
};

//add a department
const includeDepartment = (newDP) => {
  const sql = "INSERT INTO department (name) VALUES (?)";
  const values = [newDP.department];
  dbConnection.query(sql, values, (err, results) => {
    if (err) throw err;
    console.info(`${newDP.name} added.`);
  });
};

//add a role
const includeRole = (newRole) => {
  const sql = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)";
  const values = [newRole.title, newRole.salary, newRole.department_id];
  dbConnection.query(sql, values, (err, results) => {
    if (err) throw err;
    console.info(`${newRole.title} added.`);
  });
};

//add an employee
const includeEmployee = (newEmp) => {
  const sql =
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
  const values = [newEmp.first_name, newEmp.last_name, newEmp.role_id, newEmp.manager_id];

  dbConnection.query(sql, values, (err, results) => {
    if (err) throw err;
    console.info(`${newEmp.first_name} added.`);
  });
};

//update employee role
const roleUpdate = (updateEmp) => {
  const sql = "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?";
  const values = [updateEmp.role_id, updateEmp.first_name, updateEmp.last_name];
  dbConnection.query(sql, values, (err, results) => {
    if (err) throw err;
    console.info(`${updateEmp.first_name} updated.`);
  });
};

//update employee manager
const managerUpdate = (updateEmp) => {
  const sql = "UPDATE employee SET manager_id = ? WHERE first_name = ? AND last_name = ?";
  const values = [updateEmp.manager_id, updateEmp.first_name, updateEmp.last_name];
  dbConnection.query(sql, values, (err, results) => {
    if (err) throw err;
    console.info(`${updateEmp.first_name} updated.`);
  });
};

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  includeDepartment,
  includeRole,
  includeEmployee,
  roleUpdate,
  managerUpdate,
};
