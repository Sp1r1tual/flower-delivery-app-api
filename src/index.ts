import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { shopRouter } from "./shop/routers/shop-router.js";
import { cartRouter } from "./shop/routers/cart-router.js";

import { errorMiddleware } from "./shared/middlewares/error-middleware.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL =
  process.env.DB_URL || "mongodb://localhost:27017/flower-delivery";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);
app.use(express.json());
app.use(errorMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Flower Delivery API is running" });
});
app.use("/", shopRouter);
app.use("/", cartRouter);

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
