import * as types from "../actions/types";

const initialState = {
  isAuth: false,
  user: {},
  isLoading: false,
  redirectToReferrer: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: action.payload ? true : false,
        isLoading: false
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true
      };
    case types.LOGIN_SUCESS:
      return {
        ...state,
        isAuth: action.payload ? true : false,
        user: action.payload,
        isLoading: false,
        redirectToReferrer: true
      };
    case types.SET_USER:
      return {
        ...state,
        isAuth: action.payload.userInfo ? true : false,
        user: action.payload.userInfo,
        isLoading: false,
        redirectToReferrer: true
      };
    case types.LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
