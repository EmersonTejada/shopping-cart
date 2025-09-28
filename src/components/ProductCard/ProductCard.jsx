import { useContext, useState } from "react";
import styles from "./ProductCard.module.css";

import ProductQuantity from "./ProductQuantity";
import handleDecrementar from "../../utils/handleDecrementar";
import handleIncrementar from "../../utils/handleIncrementar";
import { CartContext } from "../../context/CartContext";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleChange = (e) => {
    let value = Number(e.target.value);

    if (value < 1) value = 1;
    if (value > 99) value = 99;
    setQuantity(value);
  };

  return (
    <div className={styles.cardContainer}>
      <img src={product.image} alt="Imagen del Producto" />
      <h3>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <span className={styles.productQuantityContainer}>
        <ProductQuantity
          quantity={quantity}
          handleChange={handleChange}
          handleIncrementar={() => handleIncrementar(quantity, setQuantity)}
          handleDecrementar={() => handleDecrementar(quantity, setQuantity)}
        />
      </span>
      <button className={styles.addProductCart} onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ProductCard;
