import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";

import reducer from "./reducer.js";
import { addComment } from "./actions.js";

import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(addComment("pierwszy komentarz"));
store.dispatch(addComment("drugi komentarz"));
