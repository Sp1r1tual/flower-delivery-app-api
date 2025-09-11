import { OrderCounterModel } from "../../models/order-counter-model.js";

const getNextOrderNumber = async (): Promise<number> => {
  const counter = await OrderCounterModel.findOneAndUpdate(
    { name: "orderNumber" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
  ).exec();

  return counter.seq;
};

export { getNextOrderNumber };
