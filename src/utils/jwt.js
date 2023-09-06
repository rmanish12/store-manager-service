const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../env");

const generateToken = payload =>
  jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1d"
  });

const decodeToken = token => {
  const { id } = jwt.verify(token, JWT_SECRET);
  return { id };
};

module.exports = { generateToken, decodeToken };
