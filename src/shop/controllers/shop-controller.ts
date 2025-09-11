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

  async getAllItems(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await shopService.getAllItems();
      return res.json(items);
    } catch (error) {
      next(error);
    }
  }

  async getItemsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId } = req.params;
      const items = await shopService.getItemsByCategory(categoryId);

      return res.json(items);
    } catch (error) {
      next(error);
    }
  }
}

export { ShopController };
