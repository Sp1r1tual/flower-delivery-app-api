import { Request, Response, NextFunction } from "express";

import { OrderService } from "../services/order-service.js";

const orderService = new OrderService();

class OrderController {
  async getOrderByNumber(req: Request, res: Response, next: NextFunction) {
    try {
      const { orderNumber } = req.params;
      const order = await orderService.getByOrderNumber(orderNumber);

      return res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { OrderController };
