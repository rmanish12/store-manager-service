const app = require("./app");
const { APP_PORT } = require("./env");
const logger = require("./config/logger");

app.listen(APP_PORT, () => logger.info(`Server started on port ${APP_PORT}`));
