import React, { ReactNode } from "react";
import { ProductsContext } from "./ProductsContext";
import useProducts from "../hooks/useProducts";
interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { data: products = [], error, isLoading } = useProducts();
  return (
    <ProductsContext value={{ products, error, isLoading }}>
      {children}
    </ProductsContext>
  );
};
