require("dotenv").config();

const {
  NODE_ENV,
  ALLOWED_ORIGIN,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  DB_HOST,
  APP_PORT,
  JWT_SECRET
} = process.env;

module.exports = {
  NODE_ENV: NODE_ENV || "development",
  ALLOWED_ORIGIN,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  DB_HOST,
  APP_PORT,
  JWT_SECRET
};
