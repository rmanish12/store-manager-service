/* eslint-disable no-param-reassign */
const {
  StatusCodes,
  ReasonPhrases,
  getReasonPhrase
} = require("http-status-codes");
const logger = require("../config/logger");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  logger.error(JSON.stringify(err));
  const errors = [];

  // for checking validation errors by ajv
  if (Array.isArray(err)) {
    err.statusCode = StatusCodes.BAD_REQUEST;
    err.code = ReasonPhrases.BAD_REQUEST;
    err.forEach(error =>
      errors.push({
        key: error.key,
        message: error.message,
        detail: error.params
      })
    );
  } else {
    const message =
      err.message || getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);
    errors.push({ message });
  }

  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const status = err.status || ReasonPhrases.INTERNAL_SERVER_ERROR;

  res.status(status).send({
    statusCode,
    status,
    errors
  });
};

module.exports = errorHandler;
