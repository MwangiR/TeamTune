const express = require("express");
const inquirer = require("inquirer");
const connection = require("./src/utils/dbconnect");

//import routes
const api = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 3000;
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Employee Tracker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Inquirer prompts
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ]);
};
// View All Departments
const viewAllDepartments = () => {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    promptUser();
  });
};
// View All Roles
const viewAllRoles = () => {
  connection.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    console.table(results);
    promptUser();
  });
};
// View All Employees
const viewAllEmployees = () => {
  connection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    console.table(results);
    promptUser();
  });
};
// Add a Department
const addDepartment = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What department would you like to add?",
    },
  ]);
};
// Add a Role
const addRole = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the department ID of the role?",
    },
  ]);
};

// Add an Employee
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the role ID of the employee?",
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is the manager ID of the employee?",
    },
  ]);
};

// Update an Employee Role
const updateEmployeeRole = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is the role ID of the employee?",
    },
  ]);
};

// Function to call inquirer prompts
const init = () => {
  promptUser();
};
