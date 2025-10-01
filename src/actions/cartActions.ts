import { CartAction } from "../reducers/cartReducer";
import { Product } from "../types/product";

export const addToCart = (product: Product): CartAction => ({
  type: "addToCart",
  payload: product,
});

export const removeFromCart = (productId: number): CartAction => ({
  type: "removeFromCart",
  payload: productId,
});
