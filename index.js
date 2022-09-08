import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import hotelRoute from "./routes/hotels.js";

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

app.use(express.json());

//middleware
app.use("/api/hotels", hotelRoute);
// app.use("/api/users", userRoute);

app.listen(4000, () => {
  connect();
  console.log("Connected to backend");
});
