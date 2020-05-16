var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
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
    res.send({ data: saved._id });
  } catch (error) {
    res.send({ data: error });
  }
});

module.exports = router;
