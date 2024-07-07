import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import mentorRouter from "./Routes/mentorRouter.js";
import studentRouter from "./Routes/studentRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Welcome To Our App");
});

app.use("/api", mentorRouter);
app.use("/api", studentRouter);

app.listen(port, () => {
  console.log("App Is Running On The Port",port);
});