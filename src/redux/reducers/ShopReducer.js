import types from "../Types";

const initialState = {
  products: [],
  categories: [],
};

export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return Object.assign({}, state, {
        ...state,
        products: [...action.payload]
      })

    case types.SET_CATEGORIES:
      return Object.assign({}, state, {
        ...state,
        categories: [...action.payload]
      })
    default:
      return {
        ...state,
      };
  }
};
