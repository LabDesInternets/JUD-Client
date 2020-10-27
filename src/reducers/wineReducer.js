import { SET_WINES, SET_WINE_DETAILS } from "../actions/types";

const initialState = {
  wines: [],
  wine: null,
  isLoading: false
};

const wines = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINES:
      return {
        ...state,
        wines: action.payload
      };
    case SET_WINE_DETAILS:
      return {
        ...state,
        wine: action.payload
      };
    default:
      return state;
  }
};

export default wines;
