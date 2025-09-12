import { Express, Request, Response } from "express";

import { shopRouter } from "./shop/routers/shop-router.js";
import { cartRouter } from "./shop/routers/cart-router.js";
import { orderRouter } from "./shop/routers/order-router.js";

const router = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Flower Delivery API is running" });
  });
  app.use("/", shopRouter);
  app.use("/", cartRouter);
  app.use("/", orderRouter);
};

export { router };
