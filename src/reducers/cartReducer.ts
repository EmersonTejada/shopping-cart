import { Product } from "../types/product";

export const initialCartState: Product[] = [];

export type CartAction =
  | { type: "addToCart"; payload: Product }
  | { type: "removeFromCart"; payload: number };

export function cartReducer(state: Product[], action: CartAction) {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
}
