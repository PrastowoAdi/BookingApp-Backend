import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import hotelRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/hotels", hotelRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  connect();
  console.log("Connected to backend");
});
