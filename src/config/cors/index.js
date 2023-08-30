const { ALLOWED_ORIGIN } = require("../../env");

module.exports = {
  origin: ALLOWED_ORIGIN,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};
