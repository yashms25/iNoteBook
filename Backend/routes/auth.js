const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// create user using POST 'api/auth/. No login require

router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be at least 5 characters.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors , return bad request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user exists with same email
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry a user with this email already exists." });
    }
    try {
      user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      // .then((user) => res.json(user))
      // .catch((err) => res.json({ error: "Please enter unique email" }));
      res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some error occured")
    }
  }
);

module.exports = router;
