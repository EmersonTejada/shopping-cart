import CartProduct from "../components/CartProduct/CartProduct";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <section className="cart">
      {cart.map((product) => (
        <CartProduct
          key={product.id}
          product={product}
          handleDelete={() => removeFromCart(product.id)}
        />
      ))}
    </section>
  );
};

export default Cart;
