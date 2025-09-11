import { Schema, model, Types } from "mongoose";

const OrderSchema = new Schema(
  {
    orderNumber: { type: Number, required: true, unique: true },

    userName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },

    items: [
      {
        product: { type: Types.ObjectId, ref: "ShopItem", required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: 1 },
        itemImg: { type: String, default: null },
      },
    ],

    orderDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

const OrderModel = model("Order", OrderSchema);

export { OrderModel };
