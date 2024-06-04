import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

//rest object
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
  );
});
