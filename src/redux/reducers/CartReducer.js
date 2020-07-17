import types from "../Types";

const initialState = {
  cartItems: [],
  currentItem: 0,
  cartTotalItems: 0,
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
          ...state,
          cartItems: state.cartItems.concat(item),
        };
      }

    case types.CART_UPDATE:
      let upItem = state.cartItems.find((itm) => itm.id === action.payload.id);
      if (!!upItem) upItem.qty = action.payload.qty;
      return {
        ...state,
        currentItem: { ...state.currentItem, ...upItem },
      };

    case types.CART_TOTAL_ITEMS:
      return {
        ...state,
        cartTotalItems: action.payload,
      };

    case types.CART_DELETE:
      let newStore = [];
      let delItem = state.cartItems.filter(itm => itm.id === action.payload.id);
      let restItems = state.cartItems.filter(re => re.id !== delItem[0].id);
      delItem[0].qty -= 1;
      if (delItem[0].qty === 0) {//remove from cart
        newStore = newStore.concat(restItems);
      }
      if (delItem[0].qty > 0) {//update item qty
        newStore = [...restItems, ...delItem];
      }

      return {
        cartItems: newStore,
      };

    default:
      return {
        ...state,
      };
  }
};
