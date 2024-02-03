const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Course, Admin } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({ username: username });
  if (admin) {
    res.status(400).send("username already exists");
  } else {
    const newAdmin = new Admin({
      username,
      password,
    });
    newAdmin.save();
    res.status(200).send("Admin created successfully");
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

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const courses = Course.find();
  res.status(200).json({ courses });
});

module.exports = router;
