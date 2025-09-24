import { useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard/ProductCard";
import useProducts from "../hooks/useProducts";

const Shop = () => {
  const { data: products = [], error, isLoading } = useProducts();
  const { addToCart } = useOutletContext();

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart}/>
      ))}
    </>
  );
};

export default Shop;
