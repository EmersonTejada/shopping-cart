import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Layout = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product])
  }
  
  return (
    <>
      <Header cart={cart} setCart={setCart}/>
      <main>
        <Outlet context={{cart, setCart, addToCart}}/>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
