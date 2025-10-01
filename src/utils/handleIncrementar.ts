import React from "react";

const handleIncrementar = (
  quantity: number,
  setQuantity: React.Dispatch<React.SetStateAction<number>>
) => {
  if (quantity < 99) setQuantity(quantity + 1);
};

export default handleIncrementar;
