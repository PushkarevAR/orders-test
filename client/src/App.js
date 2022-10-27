import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import { getOrders, addOrder } from "./services/ordersAPI";
import Order from "./components/Order";
import Search from "./components/Search";
import arrowIcon from "./assets/arrow.svg";

function App() {
  const { appStyle, idStyle, sorteble } = styles;
  const [orders, setOrders] = useState(null);

  const order = {
    id: 2,
    name: "test2",
    weight: "0.3 kg",
    date: "11.12.1996",
    available: true,
    customer: "John",
  };

  useEffect(() => {
    getOrders()
      .then((res) => setOrders(res))
      .then(() => console.log("GET orders"));
  }, []);

  const addOrderHandler = () => {
    addOrder(order);
  };

  return (
    <div className={appStyle}>
      <header>
        <button onClick={addOrderHandler}>Add Order</button>
        <Search />
      </header>
      <table>
        <thead>
          <tr>
            <th className={idStyle}>ID<img src={arrowIcon} alt="sort by date" /></th>
            <th className={sorteble}>Name<img src={arrowIcon} alt="sort by date" /></th>
            <th>Weigth</th>
            <th className={sorteble}>Date<img src={arrowIcon} alt="sort by date" /></th>
            <th>Available</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => <Order key={order.id} order={order} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
