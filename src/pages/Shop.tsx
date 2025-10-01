import { useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { ProductsContext } from "../context/ProductsContext";

const Shop = () => {
  const { products, error, isLoading } = useContext(ProductsContext);

  return (
    <section className="shop">
      {isLoading && <p>Cargando...</p>}
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Shop;
