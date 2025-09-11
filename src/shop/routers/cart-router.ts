import { Router } from "express";

import { orderMiddleware } from "../middlewares/order-middleware.js";

import { CartController } from "../controllers/cart-controller.js";

const cartRouter = Router();

const cartController = new CartController();

cartRouter.post("/cart/checkout", orderMiddleware, cartController.checkoutCart);

export { cartRouter };
