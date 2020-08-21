const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.DEV_URL,
  // ssl: process.env.DATABASE_URL ? true : false, //dev
  ssl: {
    rejectUnauthorized: false,
  }, //prod
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
