type CartItemType = {
  productId: string;
  quantity: number;
};

type CheckoutDataType = {
  cart: CartItemType[];
  userName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

export type { CartItemType, CheckoutDataType };
