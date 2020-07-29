import types from "../Types";

const initialState = {
  products: [],
  categories: [],
  totalCount: 0,
  page: 1,
  totalPages: 0,
};

export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return Object.assign({}, state, {
        ...state,
        products: [...action.payload.items],
        totalCount: action.payload.totalCount,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      });

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
