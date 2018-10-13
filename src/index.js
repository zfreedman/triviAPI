import { createStore } from "redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import middleware from "./middleware";
import reducers from "./reducers";
import theme from "./material";

import "./sass/main.scss";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
