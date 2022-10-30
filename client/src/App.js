import styles from "./App.module.scss";
import React, { useEffect, useContext, useState } from "react";
import { getOrders } from "./services/ordersAPI";
import Search from "./components/Search";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import Modal from "./components/modals/Modal";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody";

const App = observer(() => {
  const { app } = styles;

  const [sortOrder, setSortOrder] = useState({ type: "id", isAscending: true });
  const [search, setSearch] = useState("");
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
    setModal({ isActive: true, type: "add" });
  };

  return (
    <div className={app}>
      <Modal
        isActive={modal.isActive}
        type={modal.type}
        source={modal.source}
        setModal={setModal}
      />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <header>
            <button onClick={addOrderHandler}>Add Order</button>
            <Search value={search} setSearch={setSearch} />
          </header>
          <table>
            <Thead sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <Tbody
              orderStore={orderStore}
              sortOrder={sortOrder}
              search={search}
              setModal={setModal}
            />
          </table>
        </>
      )}
    </div>
  );
});

export default App;
