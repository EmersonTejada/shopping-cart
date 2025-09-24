import { useQuery } from "@tanstack/react-query";
import fetchData from "../utils/fetchData";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchData("https://fakestoreapi.com/products"),
  });
};

export default useProducts;
