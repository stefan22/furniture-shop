import types from "../Types";

export const addToCart = (product) => (dispatch) => {
  if (product.qty) {
    product.qty += 1;
  } else product.qty = 1;
  dispatch({
    type: types.CART_ADD,
    payload: product
  });
};

export const updateCart = (product, qty) => (dispatch) => {
  let objUpdate = {};
  objUpdate.id = product.id;
  objUpdate.qty = qty;
  dispatch({
    type: types.CART_UPDATE,
    payload: objUpdate
  });
};

export const deleteFromCart = (product) => (dispatch) => {
  dispatch({
    type: types.CART_DELETE,
    payload: product
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: types.CART_CLEAR
  });
};

export const totalCartItems = (cartItems) => (dispatch) => {
  let count = 0;
  !!cartItems &&
    cartItems.map((itm) =>
      Number(itm.qty) > 1 ? (count += Number(itm.qty)) : Number((count += 1))
    );
  dispatch({
    type: types.CART_TOTAL_ITEMS,
    payload: count
  });
};

export const getCartTotal = (cartItems) => (dispatch) => {
  let sum = 0;
  if (cartItems.length > 0) {
    sum = cartItems
      .map((itm) => itm.price * itm.qty)
      .reduce((total, price) => total + price);
  }
  dispatch({
    type: types.CART_TOTAL_PRICE,
    payload: sum
  });
};
