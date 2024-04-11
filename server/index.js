const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { taskRouter } = require("./Routes/Task.route");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/task", taskRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the Database");
  } catch (error) {
    console.log("Connection Error:", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});
