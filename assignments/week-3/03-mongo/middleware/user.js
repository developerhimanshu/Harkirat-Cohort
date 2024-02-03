const { User } = require("../db/index");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  User.findOne({ username: username, password: password }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      next();
    } else {
      res.status(404).json({ msg: "Unauthorized" });
    }
  });
}

module.exports = userMiddleware;
