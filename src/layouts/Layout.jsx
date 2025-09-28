import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

const Layout = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <CartContext value={{cart, setCart, addToCart}}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartContext>
    </>
  );
};

export default Layout;
