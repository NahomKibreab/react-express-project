// load .env data into process.env
require("dotenv").config();

const pg = require("pg");
const client = new pg.Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});
client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));
module.exports = client;
