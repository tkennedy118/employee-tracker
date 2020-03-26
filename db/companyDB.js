const connection = require('./connection');

class CompanyDB {

    constructor(connection) {
        this.connection = connection;
    }

    async viewTable(table) {
        const query = `SELECT * FROM ${table}`;
        const result = await this.connection.query(query);

        if (!result) throw new Error("Could not retrieve table information.");
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

        if(!result) throw new Error("Could not add employee.");
        return result;
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports = new CompanyDB(connection);