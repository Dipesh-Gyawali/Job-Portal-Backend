import express from "express";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
  );
});
