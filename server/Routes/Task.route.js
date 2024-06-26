const express = require("express");
const { TaskModel } = require("../Model/Task.model");
const { CountModel } = require("../Model/Count.model");

const taskRouter = express.Router();

// Get all tasks
taskRouter.get("/", async (req, res) => {
  try {
    const taskData = await TaskModel.find();
    res.status(200).send({ taskData });
  } catch (err) {
    res.status(400).send({ Error: err.message });
  }
});

// Create new task
taskRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const NewTaskData = new TaskModel(payload);
    NewTaskData.save();
    res.status(200).send({ message: "New task added successfully" });
  } catch (err) {
    res.status(400).send({ Error: err.message });
  }
});

// Update task
taskRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const UpdatedTaskData = await TaskModel.findByIdAndUpdate(
      { _id: id },
      payload
    );
    res.status(200).send({ message: "Task updated successfully" });
  } catch (err) {
    res.status(400).send({ Error: err.message });
  }
});

// Get counts of operations
taskRouter.get("/getCount", async (req, res) => {
  try {
    const counts = await CountModel.findOne({});

    if (!counts) {
      return res.status(400).send({ message: "Counts not found" });
    }

    res
      .status(200)
      .send({ addCount: counts.addCount, updateCount: counts.updateCount });
  } catch (err) {
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = {
  taskRouter,
};
