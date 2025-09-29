export const addToCart = (product) => ({
  type: "addToCart",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "removeFromCart",
  payload: productId,
});
