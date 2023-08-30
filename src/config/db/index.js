const mongoose = require("mongoose");
const logger = require("../logger");

const {
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  DB_HOST
} = require("../../env");

async function connect() {
  try {
    await mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    );
    logger.info("DB connected");
  } catch (err) {
    logger.error(`Error while connecting to DB: ${err}`);
  }
}

if (NODE_ENV !== "test") connect();

module.exports = mongoose;
