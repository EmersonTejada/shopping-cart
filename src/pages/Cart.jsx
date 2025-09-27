import { useOutletContext } from "react-router";
import CartProduct from "../components/CartProduct/CartProduct";
import handleDelete from "../utils/handleDelete";

const Cart = () => {
  
  const { cart, setCart } = useOutletContext();
  console.table(cart);
  return cart.map((product) => (
    <section className="cart">
      <CartProduct key={product.id} product={product} handleDelete={() => handleDelete(product.id, setCart, cart)}/>
    </section>
  ));
};

export default Cart;
