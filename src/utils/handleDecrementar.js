const handleDecrementar = (quantity, setQuantity) => {
  if (quantity > 1) setQuantity(quantity - 1);
};

export default handleDecrementar;
