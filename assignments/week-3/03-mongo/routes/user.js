const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.status(400).send("User already exists");
    } else {
      const newUser = new User({
        username: username,
        password: password,
      });
      newUser.save((err, user) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json(user);
        }
      });
    }
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.send(200).json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const resp = await User.updateOne(
    { username: req.headers.username },
    { $push: { coursesPurchased: courseId } }
  );
  if (resp) {
    res.status(200).send("Course purchased successfully");
  }
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const coursePurchased = User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      return user.coursesPurchased;
    }
  });
  const courses = Course.find(
    { _id: { $in: coursePurchased } },
    (err, courses) => {
      if (err) {
        console.log(err);
      } else {
        return courses;
      }
    }
  );
  res.status(200).send(courses);
});

module.exports = router;
