// Middleware for handling auth
const jwt = require("jsonwebtoken");
const jwtSecret = "himanshusingh";
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const tokenstr = req.headers.authorization;
  const token = tokenstr.split(" ")[1];
  const decoded = jwt.verify(token, jwtSecret);
  if (decoded.username) next();
  else {
    res.status(403).send("Unauthorized");
  }
}

module.exports = adminMiddleware;
