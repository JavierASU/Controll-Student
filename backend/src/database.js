//conexion a la database

const mysql = require("mysql");

const { promisify } = require("util");

const { database } = require("./key")

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("DATA BASE CONNECTION WAS CLOSED");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("DATABASE HAS TO MANY CONNECTIONS");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("DATA BASE CONNECTION WAS REFUSE");
        }
    }
    if (connection) connection.release();
    console.log("DB is connected");
    return;

});

// para usar las promesas en vez de callbacks
pool.query = promisify(pool.query);

module.exports = pool
