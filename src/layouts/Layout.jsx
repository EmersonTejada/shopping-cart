import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import useProducts from "../hooks/useProducts";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const { data: products = [], error, isLoading } = useProducts();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <CartContext value={{ cart, setCart, addToCart }}>
        <Header />
        <main>
          <ProductsContext value={{products, error, isLoading}}>
            <Outlet />
          </ProductsContext>
        </main>
        <Footer />
      </CartContext>
    </>
  );
};

export default Layout;
