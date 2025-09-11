import { Schema, model, Document, Types } from "mongoose";

interface ShopItemDoc extends Document {
  _id: Types.ObjectId;
  name: string;
  price: number;
  itemImg: string;
  category: string;
}

const ShopItemSchema = new Schema<ShopItemDoc>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    itemImg: { type: String, required: false },
    category: { type: String, required: true },
  },
  { timestamps: true },
);

const ShopItemModel = model<ShopItemDoc>("ShopItem", ShopItemSchema);

export { ShopItemModel };
