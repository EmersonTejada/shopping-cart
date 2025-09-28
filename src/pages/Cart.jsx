import CartProduct from "../components/CartProduct/CartProduct";
import handleDelete from "../utils/handleDelete";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  console.table(cart);
  return cart.map((product) => (
    <section className="cart">
      <CartProduct
        key={product.id}
        product={product}
        handleDelete={() => handleDelete(product.id, setCart, cart)}
      />
    </section>
  ));
};

export default Cart;
