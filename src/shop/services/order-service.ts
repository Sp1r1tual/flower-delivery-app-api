import { OrderModel } from "../models/order-model.js";

import { ApiError } from "../../shared/exceptions/api-error.js";

class OrderService {
  async getByOrderNumber(orderNumber: string) {
    const num = Number(orderNumber);

    if (Number.isNaN(num)) {
      throw ApiError.BadRequest("Order number must be a valid number");
    }

    const order = await OrderModel.findOne({ orderNumber: num }).populate(
      "items.product",
    );

    if (!order) {
      throw ApiError.NotFound("Order not found");
    }

    return order;
  }
}

export { OrderService };
