const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtSecret = "himanshusingh";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  if (user) {
    res.status(200).send("User created successfully");
  } else {
    res.status(401).send("Error creating user");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password });
  if (user) {
    const token = jwt.sign({ username }, jwtSecret);
    res.status(200).json(token);
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.send(200).json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const authStr = req.headers.authorization;
  const authtoken = authStr.split(" ")[1];

  const decoded = jwt.decode(authtoken, jwtSecret);
  const username = decoded.username;

  const resp = await User.updateOne(
    { username: username },
    { $push: { coursesPurchased: courseId } }
  );

  if (resp) res.status(200).send("Course purchased successfully");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const authStr = req.headers.authorization;
  const authtoken = authStr.split(" ")[1];

  const decoded = jwt.decode(authtoken, jwtSecret);
  const username = decoded.username;

  const user = await User.findOne({ username: username });
  const courseIds = user.coursesPurchased;

  const courses = await Course.find({
    _id: {
      $in: courseIds,
    },
  });

  res.status(200).json(courses);
});

module.exports = router;
