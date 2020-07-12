import types from "../Types";

const initialState = {
  cartItems: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD:
      let exist = undefined;
      const item = action.payload;
      exist = state.cartItems.find((itm) => itm.id === item.id);
      if (!!exist) {
        exist = item;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        return {
          cartItems: state.cartItems.concat(item),
        };
      }

    default:
      return {
        ...state,
      };
  }
};
