const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.status = ReasonPhrases.CONFLICT;
    this.statusCode = StatusCodes.CONFLICT;
  }
}

module.exports = ConflictError;
