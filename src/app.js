const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const winston = require("./config/logger");

const corsConfig = require("./config/cors");
const apiRateLimit = require("./config/rateLimiter");

require("./config/db");

const app = express();

app.use(cors(corsConfig));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("combined"), { stream: winston.stream });
app.use(apiRateLimit);

module.exports = app;
