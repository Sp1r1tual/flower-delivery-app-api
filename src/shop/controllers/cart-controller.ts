import { Request, Response, NextFunction } from "express";

import { CartService } from "../services/cart-service.js";

const cartService = new CartService();

class CartController {
  async checkoutCart(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await cartService.checkoutCart(req.body);

      return res.json(order);
    } catch (error) {
      next(error);
    }
  }
}

export { CartController };
