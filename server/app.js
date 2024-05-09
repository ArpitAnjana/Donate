// app.js

import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import { connectDB } from "./config/database.js";
// import fundraiserRoutes from "./routes/fundraiserRoutes.js";
import cors from "cors";

config({ path: "./config/config.env" });

config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api", paymentRoute);
// app.use("/api/fundraiser", fundraiserRoutes);


app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);





