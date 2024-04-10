const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const TodoModel = mongoose.model("todos", todoSchema);

module.exports = {
  TodoModel,
};
