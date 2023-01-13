import styles from "./App.module.scss";
import React, { useEffect, useContext, useState } from "react";
import ordersAPi from "./services/ordersAPI";
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

  useEffect(() => {
    ordersAPi.getOrders().then((orders) => {
      orderStore.setOrder(orders);
    });
  }, [orderStore]);

  const addOrderHandler = () => {
    setModal({ isActive: true, type: "add" });
  };

  return (
    <div className={app}>
      <Modal modal={modal} setModal={setModal} />
      {orderStore.isError && (
        <>
          <p>Fetching data error: {orderStore.isError}</p>{" "}
          <button onClick={() => window.location.reload()}>Refresh page</button>
        </>
      )}
      {orderStore.isLoading && !orderStore.isError && <h1>Loading...</h1>}
      {orderStore.isSuccess && !orderStore.isError && (
        <>
          <header>
            <button onClick={addOrderHandler}>Add Order</button>
            <Search value={search} setSearch={setSearch} />
          </header>
          <table>
            <Thead sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <Tbody
              orders={orderStore.data}
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
