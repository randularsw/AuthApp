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
    res.send(savedTime);
  } catch (error) {
    res.send({ data: error });
  }
});

router.delete("/", async (req, res) => {
  try {
    const times = await Time.deleteMany({});
    console.log(times);
    res.send(times);
  } catch (error) {
    res.send({ data: error });
  }
});

module.exports = router;
