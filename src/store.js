import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import apiMiddleware from "./middlewares/api";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";
import history from "./history";

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), apiMiddleware];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);
