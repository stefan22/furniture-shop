import types from "../Types";

export const addToCart = (product) => (dispatch) => {
  if (!!product.qty) {
    product.qty += 1;
  } else product.qty = 1;
  dispatch({
    type: types.CART_ADD,
    payload: product,
  });
};

export const updateCart = (product, quantity) => (dispatch) => {
  dispatch({
    type: types.CART_UPDATE,
    payload: { product, quantity },
  });
};

export const deleteFromCart = (product) => (dispatch) => {
  dispatch({
    type: types.CART_DELETE,
    payload: product,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: types.CART_CLEAR,
  });
};
