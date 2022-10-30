import React, { useContext, useState } from "react";
import { addOrder } from "../../services/ordersAPI";
import { getOrders } from "../../services/ordersAPI";
import { Context } from "../..";

const ModalAdd = ({ setModal }) => {
  const { orderStore } = useContext(Context);
  const [newOrder, setNewOrder] = useState({
    name: "-",
    weight: "-",
    available: false,
    date: "00-00-00",
    customer: "-",
  });

  const addOrderHandler = (e) => {
    e.preventDefault();
    addOrder(newOrder)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders))
      .then(setModal({ isActive: false }));
  };

  const inputChangeHandler = (e) => {
    if (e.target.name === "available") {
      setNewOrder({ ...newOrder, [e.target.name]: e.target.checked });
      return;
    }
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setModal({ isActive: false });
  };

  return (
    <form onSubmit={addOrderHandler}>
      <h3>Add new order:</h3>
      <span>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" required onChange={inputChangeHandler} />
      </span>
      <span>
        <label htmlFor="weight">Weight:</label>
        <input
          name="weight"
          type="text"
          required
          onChange={inputChangeHandler}
        />
      </span>
      <span>
        <label htmlFor="available">Available:</label>
        <input name="available" type="checkbox" onChange={inputChangeHandler} />
      </span>
      <span>
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" required onChange={inputChangeHandler} />
      </span>
      <span>
        <label htmlFor="customer">Customer:</label>
        <input
          name="customer"
          type="text"
          required
          onChange={inputChangeHandler}
        />
      </span>
      <span>
        <button type="submit">Add</button>
        <button onClick={cancelHandler}>Cancel</button>
      </span>
    </form>
  );
};

export default ModalAdd;
