import { Request, Response, NextFunction } from "express";

import { ApiError } from "../../shared/exceptions/api-error.js";

const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  console.error(err);

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: "Something went wrong" });
};

export { errorMiddleware };
