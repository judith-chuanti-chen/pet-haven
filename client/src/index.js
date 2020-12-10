import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
// composeWithDevTools: a console which you can set up in your development environment to visualize actions and state changes that take place in a redux application
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store/reducers";
// import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById("root")
);
