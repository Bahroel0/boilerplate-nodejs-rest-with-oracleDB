const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers.token;
  try {
    if (!token) {
      res.status(401);
      return res.json({
        message: "User not authorized",
      });
    } else {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    }
  } catch (err) {
    return res.status(400).json({
      message: "Invalid Token",
    });
  }
};
