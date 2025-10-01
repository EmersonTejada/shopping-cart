import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CartProvider } from "../context/CartProvider";
import { ProductsProvider } from "../context/ProductsProvider";

const Layout = () => {
  

  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <ProductsProvider>
            <Outlet />
          </ProductsProvider>
        </main>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
