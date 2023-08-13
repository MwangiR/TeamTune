-- Insert data into 'department' table

INSERT INTO department (name)
VALUES ('HR'), ('Finance'), ('IT'), ('Marketing'), ('Operations');

-- Insert data into 'role' table

INSERT INTO
    role (title, salary, department_id)
VALUES ('HR Manager', 60000.00, 1), ('Accountant', 45000.00, 2), (
        'Software Engineer',
        75000.00,
        3
    ), (
        'Marketing Specialist',
        55000.00,
        4
    ), (
        'Operations Manager',
        65000.00,
        5
    );

-- Insert data into 'employee' table

INSERT INTO
    employee (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Smith', 2, 1), ('Michael', 'Johnson', 3, 1), ('Emily', 'Williams', 3, 1), ('David', 'Brown', 4, 5), ('Sarah', 'Miller', 4, 1);