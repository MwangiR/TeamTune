const inquirer = require("inquirer");
// const connection = require("./dbconnect");
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  includeDepartment,
  includeRole,
  includeEmployee,
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
          "Exit",
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
      } else if (answers.choice === "Add a role") {
        addRole();
      } else if (answers.choice === "Add an employee") {
        addEmployee();
      } else if (answers.choice === "Exit") {
        process.exit();
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
  return inquirer
    .prompt([
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
      {
        type: "confirm",
        name: "confirmAdd",
        message:
          "Confirm adding role? (Please note that a role can only be added to max listed departments)",
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.confirmAdd === true) {
        includeRole(answers);
        promptUser();
      } else {
        promptUser();
      }
    });
};

// Add an Employee
const addEmployee = () => {
  return inquirer
    .prompt([
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
      {
        type: "confirm",
        name: "confirmAdd",
        message:
          "Confirm adding employee? (Please note that a managerID can only be added to max listed departments)",
      },
    ])
    .then((answers) => {
      console.log(answers);

      // Handle empty manager_id input
      if (answers.manager_id.trim() === "") {
        answers.manager_id = null;
      }

      if (answers.confirmAdd === true) {
        includeEmployee(answers);
        promptUser();
      } else {
        promptUser();
      }
    });
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
