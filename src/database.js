const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "root",
  database: "eCommerce",
};

const pool = new Pool({});

const getUsers = async () => {
  await pool.query("select * from users");
};

const getProducts = async () => {
  await pool.query("select * from products");
};
