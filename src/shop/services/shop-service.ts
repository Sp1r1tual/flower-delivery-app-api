import { ShopCategoryModel } from "../models/shop-category-model.js";
import { ShopItemModel } from "../models/shop-item-model.js";

import { ApiError } from "../../shared/exceptions/api-error.js";

class ShopService {
  async getCategories() {
    const categories = await ShopCategoryModel.find();

    if (!categories) {
      throw ApiError.NotFound("Categories are not available");
    }

    return categories;
  }

  async getItems(categoryId?: string) {
    let filter = {};

    if (categoryId) {
      filter = { category: categoryId };
    }

    const items = await ShopItemModel.find(filter).populate("category");

    if (!items) {
      throw ApiError.NotFound("Items are not available");
    }

    return items;
  }
}

export { ShopService };
