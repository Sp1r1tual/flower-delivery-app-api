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
      const { page = "1", limit = "12" } = req.query;

      const data = await shopService.getAllItems(Number(page), Number(limit));
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getItemsByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId } = req.params;
      const { page = "1", limit = "12" } = req.query;

      const data = await shopService.getItemsByCategory(
        categoryId,
        Number(page),
        Number(limit),
      );

      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
}

export { ShopController };
