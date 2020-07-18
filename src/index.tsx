import React from "react";
import { Provider } from "react-redux";
import { appStore } from "./state";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
