const rateLimit = require("express-rate-limit");

const apiRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hr
  max: 100,
  message: "You have exceeded the API access limit",
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = apiRateLimit;
