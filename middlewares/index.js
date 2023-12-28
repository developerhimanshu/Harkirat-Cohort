const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if (username != "himanshu" || password != "pass") {
    res.status(400).json({ msg: "Something's up with your input" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ msg: "Something's up with your input" });
    return;
  }
  res.json({
    msg: "Your kidney is fine",
  });
});

app.listen(3000);
