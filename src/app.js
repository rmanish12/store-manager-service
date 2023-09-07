const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const winston = require("./config/logger");

const corsConfig = require("./config/cors");
const apiRateLimit = require("./config/rateLimiter");

require("./config/db");

const authRoutes = require("./routes/auth/auth.routes");
const userRoutes = require("./routes/user/user.routes");
const permissionRoutes = require("./routes/permission/permission.routes");
const roleRoutes = require("./routes/role/role.routes");

const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors(corsConfig));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(morgan("combined"), { stream: winston.stream });
app.use(apiRateLimit);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/permission", permissionRoutes);
app.use("/role", roleRoutes);

app.use(errorHandler);

module.exports = app;
