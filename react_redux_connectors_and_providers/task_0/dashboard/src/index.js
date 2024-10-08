import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App/App";
import store from "./store";


console.log('App starting...');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isLoggedIn={false} logOut={() => { }} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
