import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const isCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cart) =>
  cart.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (total, cartItem) => total + cartItem.price * cartItem.quantity,
  0
);

// const newCartCount = newCartItems.reduce(
//   (total, cartItem) => total + cartItem.quantity,
//   0
// );

// const newCartTotal = newCartItems.reduce(
//   (total, cartItem) => total + cartItem.price * cartItem.quantity,
//   0
// );
