import types from "../Types";

const initialState = {
  bigJumbo: true
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BIG_JUMBO:
      return {
        ...state,
        bigJumbo: !state.bigJumbo
      };

    default:
      return {
        ...state
      };
  }
};
