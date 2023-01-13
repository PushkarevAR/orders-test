import React, { useContext, useState } from "react";
import ordersAPi from "../../services/ordersAPI";
import { Context } from "../..";

const ModalEdit = ({ order, setModal }) => {
  const { orderStore } = useContext(Context);
  const [editedOrder, setEditedOrder] = useState({ ...order });

  const addOrderHandler = (e) => {
    e.preventDefault();
    ordersAPi.editOrder(editedOrder)
      .then((order) => (order.isSuccess ? ordersAPi.getOrders() : order))
      .then((order) => orderStore.setOrder(order))
      .then(setModal({ isActive: false }));
  };

  const inputChangeHandler = (e) => {
    if (e.target.name === "available") {
      setEditedOrder({ ...editedOrder, [e.target.name]: e.target.checked });
      return;
    }
    setEditedOrder({ ...editedOrder, [e.target.name]: e.target.value });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setModal({ isActive: false });
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
          value={editedOrder.customer}
          onChange={inputChangeHandler}
          placeholder={editedOrder.customer}
        />
      </span>
      <span>
        <label htmlFor="available">Available:</label>
        <input
          name="available"
          type="checkbox"
          checked={editedOrder.available}
          onChange={inputChangeHandler}
        />
      </span>
      <span>
        <button type="submit">Confirm</button>
        <button onClick={cancelHandler}>Cancel</button>
      </span>
    </form>
  );
};

export default ModalEdit;
