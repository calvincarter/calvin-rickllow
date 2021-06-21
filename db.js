const { Client } = require("pg");

const sslConfig = process.env.DATABASE_URL ? {rejectUnauthorized: false} : undefined;

const db = new Client({
  connectionString: process.env.DATABASE_URL || "postgresql:///rickllow",
  ssl: sslConfig
});

db.connect();

module.exports = db;