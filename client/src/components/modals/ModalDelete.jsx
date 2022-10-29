import React, { useContext } from "react";
import { deleteOrder } from "../../services/ordersAPI";
import { getOrders } from "../../services/ordersAPI";
import { Context } from "../..";

const ModalDelete = ({ order, closeModal }) => {
  const { orderStore } = useContext(Context);

  const deleteOrderHandler = (event) => {
    event.preventDefault();
    deleteOrder(order)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders))
      .then(closeModal);
  };

  return (
    <form onSubmit={deleteOrderHandler}>
      <h3>Are you sure you want to permanently delete order?</h3>
      <span>
        <button type="submit">Yes</button>
        <button
          onClick={(event) => {
            event.preventDefault();
            closeModal();
          }}
        >
          No
        </button>
      </span>
    </form>
  );
};

export default ModalDelete;
