import ReactDOM from "react-dom";
import React from "react";

//*Componenets
import { App } from "./components/app/App";

//*Redux
import { Provider } from "react-redux";
import store from "./redux/store"

const app = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
