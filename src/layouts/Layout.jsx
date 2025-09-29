import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ProductsContext } from "../context/ProductsContext";
import useProducts from "../hooks/useProducts";
import { CartProvider } from "../context/CartProvider";

const Layout = () => {
  const { data: products = [], error, isLoading } = useProducts();

  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <ProductsContext value={{ products, error, isLoading }}>
            <Outlet />
          </ProductsContext>
        </main>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
