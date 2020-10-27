import React from "react";
import ReactDOM from "react-dom";
import "@csstools/normalize.css";
import "reset-css";
import { ThemeProvider } from "styled-components";
import { Grommet } from "grommet";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import "redux-thunk";
import store from "./store";
import history from "./history";
import theme from "./theme";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Grommet theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </Grommet>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
