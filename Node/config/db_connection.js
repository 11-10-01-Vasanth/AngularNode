const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "vaSA@2001",
  database: "angulardb",
});

module.exports = pool;