const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const PG_URI = process.env.PG_URI;

  const pool = new Pool({
    connectionString: PG_URI
  });


// CREATE TABLE posts (
// post_id SERIAL PRIMARY KEY,
// user_id INT NOT NULL REFERENCES users(user_id),
// location VARCHAR NOT NULL,
// rating INT NOT NULL,
// review VARCHAR,
// date VARCHAR NOT NULL
// );

// CREATE TABLE users (
// user_id SERIAL PRIMARY KEY,
// username VARCHAR NOT NULL,
// password VARCHAR NOT NULL,
// cookie VARCHAR
// );

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};