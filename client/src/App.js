import styles from "./App.module.scss";
import React, { useEffect, useContext, useState } from "react";
import { getOrders } from "./services/ordersAPI";
import Order from "./components/Order";
import Search from "./components/Search";
import arrowIcon from "./assets/arrow.svg";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import Modal from "./components/modals/Modal";

const App = observer(() => {
  const { appStyle, idStyle, sorteble } = styles;
  const [modal, setModal] = useState({
    isActive: false,
    type: null,
    source: null,
  });
  const { orderStore } = useContext(Context);
  const isLoading = !orderStore.orders ? true : false;

  useEffect(() => {
    getOrders().then((orders) => orderStore.setOrders(orders));
  }, [orderStore]);

  // DELETE
  useEffect(() => {
    console.log("rerender");
  });

  const addOrderHandler = () => {
    setModal({ isActive: true, type: "add", source: null });
  };

  return (
    <div className={appStyle}>
      <Modal
        isActive={modal.isActive}
        type={modal.type}
        source={modal.source}
        setActive={setModal}
      />
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
                <Order key={order.id} order={order} setModal={setModal} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
});

export default App;
