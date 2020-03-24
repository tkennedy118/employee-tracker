DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    department_id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NULL
);

CREATE TABLE role (
    role_id INT(10) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(8, 2) NULL,
    department_id INT(10) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
    employee_id INT(10) PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10) NULL,
    FOREIGN KEY (role_id) REFERENCES role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);