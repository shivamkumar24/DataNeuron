const mongoose = require("mongoose");

const countSchema = new mongoose.Schema(
  {
    addCount: { type: Number, default: 0, required: true },
    updateCount: { type: Number, default: 0, required: true },
  },
  {
    versionKey: false,
  }
);

const CountModel = mongoose.model("Count", countSchema);

module.exports = {
  CountModel,
};
