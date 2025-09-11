import { ShopItemModel } from "../models/shop-item-model.js";
import { OrderModel } from "../models/order-model.js";

import { CheckoutDataType } from "../../types/index.js";

import { ApiError } from "../../shared/exceptions/api-error.js";

import { getNextOrderNumber } from "../utils/order/get-next-order-number.js";

class CartService {
  async checkoutCart(data: CheckoutDataType) {
    const { userName, email, phoneNumber, address, cart, orderDate } = data;

    const productIds = cart.map((item) => item.productId);
    const products = await ShopItemModel.find({ _id: { $in: productIds } });

    let totalPrice = 0;
    const items = cart.map((item) => {
      const product = products.find((p) => p._id.toString() === item.productId);

      if (!product) {
        throw ApiError.NotFound(`Product ${item.productId} not found`);
      }

      totalPrice += product.price * item.quantity;

      return {
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        itemImg: product.itemImg,
      };
    });

    const nextOrderNumber = await getNextOrderNumber();

    const order = await OrderModel.create({
      orderNumber: nextOrderNumber,
      orderDate,
      userName,
      email,
      phoneNumber,
      address,
      items,
      totalPrice,
    });

    return order;
  }
}

export { CartService };
