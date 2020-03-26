const connection = require('./connection');

class CompanyDB {

    constructor(connection) {
        this.connection = connection;
    }

    async getAll() {
        const query = `SELECT e.first_name, e.last_name, e.employee_id, r.title AS role, d.name AS department FROM employee as e 
                       RIGHT JOIN role AS r ON e.role_id = r.role_id RIGHT JOIN department AS d ON r.department_id = d.department_id
                       ORDER BY e.employee_id`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not retrieve all data.");
        return result;
    }

    async getTable(table) {
        const query = `SELECT * FROM ${table}`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not retrieve table information.");
        return result;
    }

    async getDeptNameAndValue() {
        const query = `SELECT name, department_id AS value FROM department`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not retrieve departments.");
        return result;
    }

    async getRoleNameAndValue() {
        const query = `SELECT CONCAT(r.title, " of ", d.name) AS name, r.role_id AS value FROM role AS r 
                       INNER JOIN department AS d ON r.department_id = d.department_id`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not retrieve roles.");
        return result;
    }

    async getEmpNameAndValue() {
        const query = `SELECT CONCAT (first_name, " ", last_name) AS name, employee_id AS value FROM employee`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not retrieve employees.");
        return result;
    }

    async addDepartment(name) {
        const query = `INSERT INTO department (name) VALUES ('${name}')`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not add department."); 
        return result;
    }

    async addRole(title, salary, department_id) {
        const query = `INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department_id})`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not add role.");
        return result;
    }

    async addEmployee(first_name, last_name, role_id, manager_id) {
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', ${role_id}, ${manager_id})`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not add employee.");
        return result;
    }

    async updateEmployeeRole(emp_id, role_id) {
        const query = `UPDATE employee SET role_id = ${role_id} WHERE employee_id = ${emp_id}`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not update employee role.");
        return result;
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports = new CompanyDB(connection);