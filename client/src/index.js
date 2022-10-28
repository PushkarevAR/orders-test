import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import OrderStore from "./store/OrderStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const Context = createContext(null);
root.render(
  <Context.Provider value={{ orderStore: new OrderStore() }}>
    <App />
  </Context.Provider>
);
