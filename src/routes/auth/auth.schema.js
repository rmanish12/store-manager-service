const createUserBody = {
  type: "object",
  required: ["email", "password", "firstName", "lastName"],
  properties: {
    email: { type: "string" },
    password: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" }
  }
};

const loginBody = {
  type: "object",
  required: ["email", "password"],
  additionalProperties: false,
  properties: {
    email: { type: "string" },
    password: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" }
  }
};

module.exports = { createUserBody, loginBody };
