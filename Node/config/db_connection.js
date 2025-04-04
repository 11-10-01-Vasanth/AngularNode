var props = require("./db_properties");
const mysql = require('mysql2');

// ✅ Create a connection pool
const pool = mysql.createPool({
  host: props.host,
  user: props.user,
  password: props.password,
  database: props.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool; // Export the pool instead of mysql directly
