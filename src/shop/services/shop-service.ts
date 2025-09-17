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

  async getAllItems(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      ShopItemModel.find().populate("category").skip(skip).limit(limit),
      ShopItemModel.countDocuments(),
    ]);

    if (!items) {
      throw ApiError.NotFound("Items are not available");
    }

    return {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getItemsByCategory(categoryId: string, page: number, limit: number) {
    if (!Types.ObjectId.isValid(categoryId)) {
      throw ApiError.BadRequest("Invalid category ID format");
    }

    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      ShopItemModel.find({ category: new Types.ObjectId(categoryId) })
        .populate("category")
        .skip(skip)
        .limit(limit),
      ShopItemModel.countDocuments({
        category: new Types.ObjectId(categoryId),
      }),
    ]);

    if (!items) {
      throw ApiError.NotFound("Items are not available");
    }

    return {
      items,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}

export { ShopService };
