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
  orderDate: string;
};

export type { CartItemType, CheckoutDataType };
