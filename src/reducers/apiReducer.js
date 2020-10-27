import * as types from "../actions/types";

const initialState = {
  isLoading: false
};

const api = (state = initialState, action) => {
  switch (action.type) {
    case types.API_START:
      if (action.payload === types.FETCH_DATA) {
        return {
          isLoading: true // Shows loading state while fetching data from backend.
        };
      }
      break;
    case types.API_END:
      if (action.payload === types.FETCH_DATA) {
        return {
          isLoading: false
        };
      }
      break;
    default:
      return state;
  }
};

export default api;
