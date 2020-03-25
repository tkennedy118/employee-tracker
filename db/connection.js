const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "company_db"
});

connection.query = util.promisify(connection.query);
connection.connect() = function(err) {
    if (err) throw new Error("Could not connect to database");

    console.log("Connected to database at id " + connection.threadId + "\n");
}

module.exports = connection;