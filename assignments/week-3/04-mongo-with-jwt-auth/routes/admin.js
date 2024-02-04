const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index.js");
const jwt = require("jsonwebtoken");
const jwtSecret = "himanshusingh";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  console.log(username, password);

  const resp = await Admin.create({ username, password });

  if (resp) res.status(200).send("admin signup successful");
  else res.status(400).send("admin signup failed");
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  console.log(username, password);
  const admin = await Admin.findOne({ username, password });

  if (admin) {
    const token = jwt.sign({ username }, jwtSecret);
    res.status(200).json(token);
  } else {
    res.status(411).json({ message: "invalid user" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { courseTitle, description, price, imageLink, published } = req.body;
  await Course.create({
    courseTitle,
    description,
    price,
    imageLink,
    published,
  });
  res.status(200).json({ msg: "Sucessfully created a new course" });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.status(200).json({ courses });
});

module.exports = router;
