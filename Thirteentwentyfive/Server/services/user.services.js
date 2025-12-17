import pool from "../db/index.js";

export const getUsers = async () => {
  const [users] = await pool.query("SELECT * FROM users");
  return users;
};

export const createUser = async (name, email) => {
  const [result] = await pool.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return result.insertId;
};
