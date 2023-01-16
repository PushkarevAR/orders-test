import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OrdersStoreMST } from './store/OrdersStoreMST';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = OrdersStoreMST.create({
  orders: [],
});
export const StoreContext = createContext(store);

root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
