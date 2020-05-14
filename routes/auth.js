const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../model/User");

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route       POST api/auth
// @desc        Auth user and get token
// @access      Public
router.post(
  "/",
  [
    check("email", "Please include vaild email").isEmail(),
    check("password", "Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // find user with that email
      let user = await User.findOne({ email });
      // if that email does not match with the user send a error message.
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }
      // if there is a user we want to compare the password and see if it matches.
      const isMatch = await bcrypt.compare(password, user.password);
      // if the user password does not match the one that is in the databbase send back an error message.
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      // if the password matches the users email we return the token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
