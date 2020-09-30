import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { compose, createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
