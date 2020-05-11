const express = require("express");
const Time = require("../models/Time");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const times = await Time.find();
    // console.log(times);
    res.json(times);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const time = new Time({
      data: req.body.data,
    });
    // console.log(time);
    const savedTime = await time.save();
    res.json(savedTime);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/", async (req, res) => {
  try {
    const times = await Time.deleteMany({});
    console.log(times);
    res.json(times);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
