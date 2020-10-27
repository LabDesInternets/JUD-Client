import {
  GET_CART_FROM_STORAGE,
  ADD_PRODUCT,
  EMPTY_CART,
  REMOVE_FROM_CART,
  REMOVE_ONE_FROM_CART,
  UPDATE_TOTAL
} from "../actions/types";

const initialState = {
  totalCart: 0,
  totalCost: 0,
  cart: {}
};

export const getTotal = cart => {
  let total = 0;
  Object.keys(cart).map(key => {
    total += cart[key].quantity;
  });
  return total;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_FROM_STORAGE:
      return {
        ...state,
        totalCart: getTotal(action.payload),
        cart: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: action.payload,
        totalCart: getTotal(action.payload)
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        totalCart: getTotal(action.payload),
        cart: action.payload
      };
    case REMOVE_ONE_FROM_CART:
      return {
        ...state,
        totalCart: getTotal(action.payload),
        cart: action.payload
      };
    case UPDATE_TOTAL:
      return {
        ...state,
        toTal: action.payload
      };
    case EMPTY_CART:
      return {
        ...state,
        totalCart: getTotal(action.payload),
        cart: action.payload
      };
    default:
      return state;
  }
};
