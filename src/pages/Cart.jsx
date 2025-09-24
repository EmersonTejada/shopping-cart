import { useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard/ProductCard";

const Cart = () => {
  const { cart } = useOutletContext();
  console.table(cart);
  return (
    cart.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))
  );
};

export default Cart;
