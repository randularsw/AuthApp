const mongoose = require("mongoose");

const Time = mongoose.Schema({
  data: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Times", Time);
