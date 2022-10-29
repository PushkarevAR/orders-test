import React, { useContext, useState } from "react";
import { editOrder } from "../../services/ordersAPI";
import { getOrders } from "../../services/ordersAPI";
import { Context } from "../..";

const ModalEdit = ({ order, closeModal }) => {
  const { orderStore } = useContext(Context);
  const [editedOrder, setEditedOrder] = useState(order);

  const addOrderHandler = (event) => {
    event.preventDefault();
    editOrder(editedOrder)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders))
      .then(closeModal);
  };

  const inputHandler = (e) => {
    if (e.target.name === "available") {
      setEditedOrder({ ...editedOrder, [e.target.name]: e.target.checked });
      return;
    }
    setEditedOrder({ ...editedOrder, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={addOrderHandler}>
      <h3>Edit order:</h3>
      <span>
        <label htmlFor="customer">Customer:</label>
        <input
          name="customer"
          type="text"
          required
          onChange={inputHandler}
          placeholder={editedOrder.customer}
        />
      </span>
      <span>
        <label htmlFor="available">Available:</label>
        <input
          name="available"
          type="checkbox"
          checked={editedOrder.available}
          onChange={inputHandler}
        />
      </span>
      <span>
        <button type="submit">Confirm</button>
        <button
          onClick={(event) => {
            event.preventDefault();
            closeModal();
          }}
        >
          Cancel
        </button>
      </span>
    </form>
  );
};

export default ModalEdit;

// Наличие на складе
// Заказчик
