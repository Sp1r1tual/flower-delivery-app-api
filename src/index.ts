import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL =
  process.env.DB_URL || "mongodb://localhost:27017/flower-delivery";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Flower Delivery API is running!" });
});

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

start();
