import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./App.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { store } from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  