const { createClient } = require("redis");
const logger = require("../logger");
const { NODE_ENV } = require("../../env");

const client = createClient();

async function init() {
  try {
    await client.connect();
    logger.info("Redis connected");
  } catch (err) {
    logger.error(`Error while connecting to redis -> ${err}`);
  }
}

if (NODE_ENV !== "test") init();

module.exports = client;
