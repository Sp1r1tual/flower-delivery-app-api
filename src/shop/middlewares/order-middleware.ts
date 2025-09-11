import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../shared/exceptions/api-error.js";

import {
  validateEmail,
  validateUsername,
  validatePhone,
  validateAddress,
} from "../utils/validations/order-validators.js";

const orderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { userName, email, phoneNumber, address, cart } = req.body;

  if (!userName || !email || !phoneNumber || !address) {
    throw ApiError.BadRequest("All user fields are required");
  }

  if (!validateUsername(userName)) {
    throw ApiError.BadRequest("Invalid userName");
  }

  if (!validateEmail(email)) {
    throw ApiError.BadRequest("Invalid email");
  }

  if (!validatePhone(phoneNumber)) {
    throw ApiError.BadRequest("Invalid phone number");
  }

  if (!validateAddress(address)) {
    throw ApiError.BadRequest("Invalid address");
  }

  if (!cart || !Array.isArray(cart) || cart.length === 0) {
    throw ApiError.BadRequest("Cart must contain at least one item");
  }

  for (const item of cart) {
    if (
      !item.productId ||
      typeof item.quantity !== "number" ||
      item.quantity < 1
    ) {
      throw ApiError.BadRequest(
        "Each cart item must have a valid productId and quantity",
      );
    }
  }

  next();
};

export { orderMiddleware };
