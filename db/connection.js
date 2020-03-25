const mysql = require('mysql');
const util = require('util');

class Connection {

    constructor(db) {
        
        this.connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: db
        });

        this.queryAsync = util.promisify(this.connection.query).bind(connection);
    }

    connect() {
        this.connection.createConnection(function() {
            if (err) throw err;

            console.log("Connected as id " + this.connection.threadId + "\n");
        });
    }

    disconnect() {
        this.connection.end();
        console.log("Connection closed...\n");
    }
}

module.exports = new Connection;