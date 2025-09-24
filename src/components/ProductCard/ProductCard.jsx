import { useState } from "react";
import "./ProductCard.modules.css";
const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementar = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  const handleDecrementar = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart({...product, quantity})
  }

  return (
    <div className="card-container">
      <img src={product.image} alt="Imagen del Producto" />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <div className="product-quantity">
        <button className="decrementar" onClick={handleDecrementar}>
          -
        </button>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => {
            let value = Number(e.target.value);

            if (value < 1) value = 1;
            if (value > 99) value = 99;
            setQuantity(value);
          }}
          placeholder="1"
          min="1"
          max="99"
        />
        <button className="incrementar" onClick={handleIncrementar}>
          +
        </button>
      </div>
      <button className="addProductCart" onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ProductCard;
