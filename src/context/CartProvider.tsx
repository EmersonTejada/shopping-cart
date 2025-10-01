import { cartReducer, initialCartState } from "../reducers/cartReducer";
import * as cartActions from "../actions/cartActions";
import { ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { Product } from "../types/product";

interface CartProviderTypes {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderTypes) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product: Product) => {
    dispatch(cartActions.addToCart(product));
  };

  const removeFromCart = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <CartContext value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext>
  );
};
