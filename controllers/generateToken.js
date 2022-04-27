const jwt = require('jsonwwbtoken');

const generateToken = (id) => {
  return jwt.sign({id},porcess.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};


module.exports = generateToken;