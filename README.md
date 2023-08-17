# TeamTune

Welcome to the Employee Management System repository! This system provides a command-line interface for managing organizational information such as departments, roles, and employees.

### Video Link

[Video Link](https://us04web.zoom.us/clips/share/BHVzMDQgxuxCFui-K9vyDznARWUgwV3EZLG7FXlmdJdYMdujSvM)

## Table of Contents

- [Folder Structure](#folder-structure)
- [Files](#files)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure

```plaintext
Employee-Management-System/
|-- db/
|   |-- schema.sql
|   |-- seeds.sql
|-- src/
|   |-- routes/
|   |   |-- department.js
|   |   |-- employee.js
|   |   |-- index.js
|   |   |-- roles.js
|   |-- utils/
|   |   |-- dbconnect.js
|   |   |-- funcHelpers.js
|   |   |-- utility_functions.js
|-- .env.EXAMPLE
|-- .gitignore
|-- package.json
|-- server.js
|-- README.md

```

# Files

`funchelpers.js`
This file defines various helper functions that interact directly with the database. Each function corresponds to a specific database operation,
such as viewing departments, roles, employees, adding departments, roles, employees, updating roles and managers, and viewing employees by manager.
These functions are exported to be used by other parts of the application.

`utils_function.js`
This file contains inquirer-based prompts that guide the user through interacting with the Employee Management System.
It imports the helper functions defined in funchelpers.js to perform database operations based on user inputs.
The prompts cover actions like viewing all departments, roles, employees, adding departments, roles, and employees,
updating employee roles and managers, and viewing employees by manager.

## Getting Started

1. **Installation:** Clone this repository to your local machine and navigate to the repository folder. Install the required dependencies using the following command:
   ```shell
   npm install
   ```
2. **Database Configuration:** Ensure you have a database set up and configured properly. Modify the database connection settings in `utils/dbconnect.js`.
3. **Database Setup:** Before you start, make sure you have a MySQL database server installed and running.
   ```sql
   DATABASE NAME= employee_db
   ```
4. **Schema Setup:** To set up the database schema, run the following command in your MySQL command line:
   ```sql
   SOURCE path/to/db/schema.sql;
   ```
5. **Seeding Data:** If you want to populate the database with sample data, run the following command in your MySQL command line:
   ```sql
   SOURCE path/to/db/seeds.sql;
   ```
6. **Running the Application:** Start the application using:

   ```shell
   node server.js
   ```

## Usage

The Employee Management System allows you to perform various actions using the provided utility functions:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee's role
- Update an employee's manager
- View employees by manager

Follow the prompts to interact with the Employee Management System. The application guides you through these actions.

## Dependencies

`inquirer`: Library for creating interactive command-line prompts.

## Configuration

Rename `.env.EXAMPLE` to `.env` and fill in the necessary environment variables, if applicable.

## Contributing

Contributions are welcome! If you find any issues or improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
