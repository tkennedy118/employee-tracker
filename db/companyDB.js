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

    disconnect() {
        this.connection.end();
    }
}

module.exports = new CompanyDB(connection);