import { Request, Response, NextFunction } from "express";

import { ShopService } from "../services/shop-service.js";

const shopService = new ShopService();

class ShopController {
  async getShopCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await shopService.getCategories();

      return res.json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getShopItems(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryId = req.query.category as string | undefined;
      const items = await shopService.getItems(categoryId);

      return res.json(items);
    } catch (error) {
      next(error);
    }
  }
}

export { ShopController };
