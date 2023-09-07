const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = ReasonPhrases.NOT_FOUND;
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
