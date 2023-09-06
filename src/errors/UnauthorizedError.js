const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.status = ReasonPhrases.UNAUTHORIZED;
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
