const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

let addCount = 0;
let updateCount = 0;
let data = null;

// API to add or update data
app.post("/api/data", (req, res) => {
  const { action, newData } = req.body;

  if (action === "add") {
    addCount++;
    data = newData;
    res.status(200).send({ message: "Data added successfully", addCount });
  } else if (action === "update") {
    updateCount++;
    data = newData;
    res.status(200).send({ message: "Data updated successfully", updateCount });
  } else {
    res.status(400).send({ message: "Invalid action" });
  }
});

// API to get the count of add and update calls
app.get("/api/count", (req, res) => {
  res.status(200).send({ addCount, updateCount });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database");
  } catch (error) {
    console.log("Connection Error:", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
