import { cartReducer, initialCartState } from "../reducers/cartReducer";
import * as cartActions from "../actions/cartActions";
import { useReducer } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  const removeFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <CartContext value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext>
  );
};
