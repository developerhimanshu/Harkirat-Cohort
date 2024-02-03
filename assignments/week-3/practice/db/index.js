const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://himanshusinghwork01:Log1234@jaimaakali.4iepqh5.mongodb.net/userapp?authSource=admin&replicaSet=atlas-v2esj2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  // should check in the database
  const user = await User.findOne({ username: username, password: password });
  return user;
}

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({
    username: username,
  });

  if (existingUser) {
    return res.status(404).send("Username already exists");
  }
  const user = new User({
    name,
    username,
    password,
  });

  user.save();
  return res.json({
    msg: "User created successfully",
  });
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    const users = await User.find({ username: { $ne: username } });
    return res.json({ users });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
