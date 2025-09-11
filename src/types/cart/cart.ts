type CartItemType = {
  productId: string;
  quantity: number;
};

type CheckoutDataType = {
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
  cart: CartItemType[];
};

export type { CartItemType, CheckoutDataType };
