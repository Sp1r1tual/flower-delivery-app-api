import { Schema, model } from "mongoose";

const ShopCategorySchema = new Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const ShopCategoryModel = model("ShopCategory", ShopCategorySchema);

export { ShopCategoryModel };
