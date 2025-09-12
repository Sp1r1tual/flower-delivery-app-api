import { Router } from "express";

import { OrderController } from "../controllers/order-controller.js";

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get("/order/:orderNumber", orderController.getOrderByNumber);

export { orderRouter };
