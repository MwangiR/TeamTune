const inquirer = require("inquirer");
// const connection = require("./dbconnect");
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  includeDepartment,
} = require("./funcHelpers");

// Inquirer prompts
const promptUser = () => {
  return inquirer
    .prompt([
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
    ])
    .then((answers) => {
      if (answers.choice === "View all departments") {
        viewAllDepartments(() => {
          promptUser();
        });
      } else if (answers.choice === "View all roles") {
        viewAllRoles(() => {
          promptUser();
        });
      } else if (answers.choice === "View all employees") {
        viewAllEmployees(() => {
          promptUser();
        });
      } else if (answers.choice === "Add a department") {
        addDepartment();
      }
    });
};

// Add a Department
const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What department would you like to add?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      includeDepartment(answers);
      promptUser();
    });
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
// moved to server.js
// const init = () => {
//   promptUser();
// };

module.exports = { promptUser };
