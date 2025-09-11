import { Types } from "mongoose";

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

  async getAllItems() {
    const items = await ShopItemModel.find().populate("category");

    if (!items) {
      throw ApiError.NotFound("Items are not available");
    }

    return items;
  }

  async getItemsByCategory(categoryId: string) {
    if (!Types.ObjectId.isValid(categoryId)) {
      throw ApiError.BadRequest("Invalid category ID format");
    }

    const items = await ShopItemModel.find({
      category: new Types.ObjectId(categoryId),
    }).populate("category");

    if (!items) {
      throw ApiError.NotFound("Items are not available");
    }

    return items;
  }
}

export { ShopService };
