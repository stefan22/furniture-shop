import types from "../Types";

export const handleJumboOff = () => (dispatch) => {
  dispatch({
    type: types.SET_BIG_JUMBO
  });
};
