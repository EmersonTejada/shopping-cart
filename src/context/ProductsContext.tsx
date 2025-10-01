import { createContext } from "react";
import { Product } from "../types/product";
export interface ProductsContextType {
    products: Product[];
    error: Error | null;
    isLoading: boolean;
}
export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    error: null,
    isLoading: false

});

