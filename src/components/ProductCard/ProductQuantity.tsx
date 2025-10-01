import { AddCircle, RemoveCircle } from "@mui/icons-material";
import styles from "./ProductQuantity.module.css"
import { ChangeEvent } from "react";

interface ProductQuantityProps {
  quantity: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIncrementar: () => void;
  handleDecrementar: () => void;
}

const ProductQuantity = ({
  quantity,
  handleChange,
  handleIncrementar,
  handleDecrementar,
}: ProductQuantityProps) => {
  return (
    <>
      <div className={styles.productQuantity}>
        <RemoveCircle
          sx={{ fontSize: 25, cursor: "pointer" }}
          onClick={handleDecrementar}
        />
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleChange}
          placeholder="1"
          min="1"
          max="99"
        />
        <AddCircle
          sx={{ fontSize: 25, cursor: "pointer" }}
          onClick={handleIncrementar}
        />
      </div>
    </>
  );
};

export default ProductQuantity;
