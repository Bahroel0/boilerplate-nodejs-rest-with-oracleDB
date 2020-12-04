const mongoose = require("mongoose");
module.exports = mongoose.model(
  "user",
  new mongoose.Schema({
    role: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  })
);
