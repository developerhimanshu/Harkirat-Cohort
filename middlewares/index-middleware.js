const express = require("express");
const app = express();

// Middleware are basically the callback functions that are used for the validation check and they are used for following the DRY principle

// There is an extra argument in the middleware that is next. This is used for the control to be reached to the next middleware or the callback function in the http request

const AuthMiddleware = (req, res, next) => {
  if (userName != "himanshu" || password != "pass") {
    res.status(403).json({
      msg: "Incorrect input",
    });
  } else {
    next(); // This will help this middleware callback function to reach to the next callback
  }
};

const kidneyMiddleware = (req, res, next) => {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "Incorrect input",
    });
  } else {
    next();
  }
};

app.get("/health-checkup", AuthMiddleware, kidneyMiddleware, (req, res) => {
  res.status(200).json({
    msg: "You are healthy",
  });
});

app.get("/kidney-checkup", kidneyMiddleware, (req, res) => {
  res.status(200).json({
    msg: "You've got a healthy kidney",
  });
});

app.listen(3000);
