import * as types from "./types";
import store from "../store";

const CART_KEY = "jud-shop";

export const addProduct = product => {
  return dispatch => {
    const state = store.getState();
    if (!state.cartState.cart[product.id]) {
      state.cartState.cart[product.id] = product;
      state.cartState.cart[product.id].quantity = 1;
    } else {
      state.cartState.cart[product.id].quantity += 1;
    }
    dispatch({
      type: types.ADD_PRODUCT,
      payload: state.cartState.cart
    });
    dispatch(updateTotalCart());
  };
};

export const removeOneFromCart = product => {
  return dispatch => {
    const state = store.getState();
    if (state.cartState.cart[product.id].quantity !== 1) {
      state.cartState.cart[product.id].quantity =
        state.cartState.cart[product.id].quantity - 1;
    } else {
      delete state.cartState.cart[product.id];
    }

    dispatch({
      type: types.REMOVE_ONE_FROM_CART,
      payload: state.cartState.cart
    });
    dispatch(updateTotalCart());
  };
};

export const removeFromCart = product => {
  return dispatch => {
    const state = store.getState();

    delete state.cartState.cart[product.id];

    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: state.cartState.cart
    });
    dispatch(updateTotalCart());
  };
};
export const getCartFromStorage = () => {
  return dispatch => {
    const cartFromStorage = localStorage.getItem(CART_KEY);

    if (cartFromStorage !== null) {
      dispatch({
        type: types.GET_CART_FROM_STORAGE,
        payload: JSON.parse(cartFromStorage)
      });
      dispatch(updateTotalCart());
    }
  };
};

export const emptyCart = () => {
  return dispatch => {
    const state = store.getState();
    const response = window.confirm(
      "Etes-vous vous sûr de vouloir vider le caddie ? "
    );
    if (response) {
      dispatch({
        type: types.EMPTY_CART,
        payload: (state.cartState.cart = {})
      });
      dispatch(updateTotalCart());
    }
  };
};
export const updateTotalCart = () => {
  return dispatch => {
    const state = store.getState().cartState;
    let totalQuantity = 0;
    let totalCost = 0;
    Object.keys(state.cart).map(key => {
      totalQuantity += state.cart[key].quantity;
      return totalQuantity;
    });

    Object.keys(state.cart).map(key => {
      totalCost += state.cart[key].quantity * state.cart[key].publicPrice;
      return totalCost;
    });

    dispatch({
      type: types.UPDATE_TOTAL,
      payload: { totalQuantity, totalCost }
    });
  };
};
