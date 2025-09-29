export const initialCartState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
        return state.filter((product) => product.id !== action.payload)
    default:
      return state;
  }
}
