import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { getOrders, addOrder } from "./services/ordersAPI";
import Order from "./components/Order";

function App() {
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
    <div className="App">
      <button onClick={addOrderHandler}>Add Order</button>
      {/* <Search/> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Weigth</th>
            <th>Date</th>
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
