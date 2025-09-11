import { Router } from "express";

import { ShopController } from "../controllers/shop-controller.js";

const shopRouter = Router();

const shopController = new ShopController();

shopRouter.get("/categories", shopController.getShopCategories);
shopRouter.get("/shop", shopController.getAllItems);
shopRouter.get("/shop/category/:categoryId", shopController.getItemsByCategory);

export { shopRouter };
