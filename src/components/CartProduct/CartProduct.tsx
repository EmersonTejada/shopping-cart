import { ChangeEvent, useState } from "react";
import ProductQuantity from "../ProductCard/ProductQuantity";
import handleDecrementar from "../../utils/handleDecrementar";
import handleIncrementar from "../../utils/handleIncrementar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "./CartProduct.module.css";
import { Product } from "../../types/product";

interface CartProductProps {
  product: Product;
  handleDelete: () => void;
}

const CartProduct = ({ product, handleDelete }: CartProductProps) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);

    if (value < 1) value = 1;
    if (value > 99) value = 99;
    setQuantity(value);
  };

  return (
    <div className={styles.productContainer}>
      <img src={product.image} alt="Imagen del Producto" />
      <div className={styles.productInfoContainer}>
        <div className={styles.productTitleContainer}>
          <p>{product.title}</p>
        </div>
        <div className={styles.productInfo}>
          <span>
            <ProductQuantity
              quantity={quantity}
              handleChange={handleChange}
              handleDecrementar={() => handleDecrementar(quantity, setQuantity)}
              handleIncrementar={() => handleIncrementar(quantity, setQuantity)}
            />
          </span>
          <p>${product.price}</p>
          <span>
            <DeleteForeverIcon fontSize="large" onClick={handleDelete} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
