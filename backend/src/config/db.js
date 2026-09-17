const mysql = require('mysql2/promise');
const env = require('./env');

const pool = mysql.createPool({
    host: env.db.host,
    port: env.db.host,
    user: env.db.host,
    password: env.db.host,
    database: env.db.host,
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;