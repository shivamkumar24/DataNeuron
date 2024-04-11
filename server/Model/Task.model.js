const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("todos", taskSchema);

module.exports = {
  TaskModel,
};
