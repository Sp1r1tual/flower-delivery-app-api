import { Schema, model } from "mongoose";

const ShopCategorySchema = new Schema({
  name: { type: String, required: true },
});

const ShopCategoryModel = model("ShopCategory", ShopCategorySchema);

export { ShopCategoryModel };
