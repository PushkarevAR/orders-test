import styles from "./App.module.scss";
import React, { useEffect, useContext } from "react";
import { getOrders, addOrder } from "./services/ordersAPI";
import Order from "./components/Order";
import Search from "./components/Search";
import arrowIcon from "./assets/arrow.svg";
import { Context } from ".";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const { appStyle, idStyle, sorteble } = styles;
  const { orderStore } = useContext(Context);
  const isLoading = !orderStore.orders ? true : false;

  useEffect(() => {
    getOrders().then((orders) => orderStore.setOrders(orders));
  }, [orderStore]);

  useEffect(() => {
    console.log('rerender');
  });

  const test = {
    id: 1,
    name: "fuck",
    weight: "0.3 kg",
    date: "11.12.1996",
    available: true,
    customer: "John",
  };

  const addOrderHandler = () => {
    addOrder(test)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders));
  };

  return (
    <div className={appStyle}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <header>
            <button onClick={addOrderHandler}>Add Order</button>
            <Search />
          </header>
          <table>
            <thead>
              <tr>
                <th className={idStyle}>
                  ID
                  <img src={arrowIcon} alt="sort by date" />
                </th>
                <th className={sorteble}>
                  Name
                  <img src={arrowIcon} alt="sort by date" />
                </th>
                <th>Weigth</th>
                <th className={sorteble}>
                  Date
                  <img src={arrowIcon} alt="sort by date" />
                </th>
                <th>Available</th>
                <th>Customer</th>
              </tr>
            </thead>
            <tbody>
              {orderStore.orders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
});

export default App;
