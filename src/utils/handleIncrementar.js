const handleIncrementar = (quantity, setQuantity) => {
  if (quantity < 99) setQuantity(quantity + 1);
};

export default handleIncrementar;
