const jwt = require("jsonwebtoken");
JWT_SECRET = "sumit";
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "300d",
  });
};

module.exports = generateToken;
