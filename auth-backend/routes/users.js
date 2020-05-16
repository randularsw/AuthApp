var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.send({ data: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: hash,
    });
    const saved = await user.save();
    const tokenSecret = "gj56ubrtb2yesyv63jhn6rt3j";
    const token = jwt.sign({ _id: user._id }, tokenSecret);

    res.header("token", token).send({ data: saved._id });
  } catch (error) {
    res.send({ data: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send({ data: "Email doesn't exist" });

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) return res.send({ data: "Invalid password" });

    const tokenSecret = "gj56ubrtb2yesyv63jhn6rt3j";
    const token = jwt.sign({ _id: user._id }, tokenSecret);

    res.header("token", token).send({ data: user._id });
  } catch (error) {
    res.send({ data: error });
  }
});

module.exports = router;
