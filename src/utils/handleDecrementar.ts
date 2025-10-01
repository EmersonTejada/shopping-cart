import React from "react";

const handleDecrementar = (
  quantity: number,
  setQuantity: React.Dispatch<React.SetStateAction<number>>
) => {
  if (quantity > 1) setQuantity(quantity - 1);
};

export default handleDecrementar;
