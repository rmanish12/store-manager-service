const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.status = ReasonPhrases.FORBIDDEN;
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
