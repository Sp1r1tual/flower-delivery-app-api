import { Schema, model, Types } from "mongoose";

const ShopItemSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    itemImg: { type: String, default: null },
    category: { type: Types.ObjectId, ref: "ShopCategory", required: true },
  },
  { timestamps: true },
);

const ShopItemModel = model("ShopItem", ShopItemSchema);

export { ShopItemModel };
