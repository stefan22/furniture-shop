import types from "../Types";

const initialState = {
  products: [],
  categories: [],
  totalCount: 0,
  page: 1,
  perPage: 20,
  totalPages: 0,
};

export const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      console.log(action.payload)
      return {
        ...state,
        products: [...action.payload]
      }

    case types.SET_CATEGORIES:
      return Object.assign({}, state, {
        ...state,
        categories: [...action.payload]
      })

    case types.SET_PAGE:
      return Object.assign({}, state, {
        ...state,
        page: action.payload.page,
        products: action.payload.products,
      })

    default:
      return {
        ...state,
      };
  }
};
