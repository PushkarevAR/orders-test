import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OrdersStoreMST } from './store/OrdersStoreMST';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = OrdersStoreMST.create({
  orders: [],
});
export const StoreContext = createContext(store);

root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
