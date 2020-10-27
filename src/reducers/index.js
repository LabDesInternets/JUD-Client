import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";
import wineReducer from "./wineReducer";
import cartReducer from "./cartReducer";
import apiReducer from "./apiReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    userState: authReducer,
    wineState: wineReducer,
    cartState: cartReducer,
    apiReducer
  });

export default createRootReducer;
