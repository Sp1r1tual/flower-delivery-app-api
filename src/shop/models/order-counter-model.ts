import { Schema, model } from "mongoose";

const OrderCounterSchema = new Schema({
  name: { type: String, required: true, unique: true },
  seq: { type: Number, default: 0 },
});

const OrderCounterModel = model("OrderCounter", OrderCounterSchema);

export { OrderCounterModel };
