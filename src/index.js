import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./store/store";
import { LikesProvider } from "./context/like-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </Provider>
  </React.StrictMode>
);

