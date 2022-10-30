import React, { useContext } from "react";
import { deleteOrder } from "../../services/ordersAPI";
import { getOrders } from "../../services/ordersAPI";
import { Context } from "../..";

const ModalDelete = ({ order, setModal }) => {
  const { orderStore } = useContext(Context);

  const deleteOrderHandler = (e) => {
    e.preventDefault();
    deleteOrder(order)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders))
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
