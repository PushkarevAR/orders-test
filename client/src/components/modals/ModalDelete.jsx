import React, { useContext } from "react";
import ordersAPi from "../../services/ordersAPI";
import { Context } from "../..";

const ModalDelete = ({ order, setModal }) => {
  const { orderStore } = useContext(Context);

  const deleteOrderHandler = (e) => {
    e.preventDefault();
    ordersAPi.deleteOrder(order)
      .then((order) => (order.isSuccess ? ordersAPi.getOrders() : order))
      .then((order) => orderStore.setOrder(order))
      .then(setModal({ isActive: false }));
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setModal({ isActive: false });
  };

  return (
    <form onSubmit={deleteOrderHandler}>
      <p>
        Are you sure you want to permanently delete order : <b>{order.name}</b>?
      </p>
      <span>
        <button type="submit">Yes</button>
        <button onClick={cancelHandler}>No</button>
      </span>
    </form>
  );
};

export default ModalDelete;
