var props = require("./db_properties");
const { Pool } = require('pg');

// ✅ Create a connection pool
const pool = new Pool({
  host: props.host,
  user: props.user,
  password: props.password,
  database: props.database,
});

module.exports = pool;
