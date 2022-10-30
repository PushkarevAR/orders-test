import React, { useContext, useState } from "react";
import { addOrder } from "../../services/ordersAPI";
import { getOrders } from "../../services/ordersAPI";
import { Context } from "../..";

const ModalAdd = ({ order, setModal }) => {
  const { orderStore } = useContext(Context);
  const [newOrder, setEditedOrder] = useState({
    name: "-",
    weight: "-",
    available: false,
    date: "00-00-00",
    customer: "-",
  });

  const addOrderHandler = (event) => {
    event.preventDefault();
    addOrder(newOrder)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders))
      .then(setModal({ isActive: false}));
  };

  const inputHandler = (e) => {
    if (e.target.name === "available") {
      setEditedOrder({ ...newOrder, [e.target.name]: e.target.checked });
      return;
    }
    setEditedOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={addOrderHandler}>
      <h3>Add new order:</h3>
      <span>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" required onChange={inputHandler} />
      </span>
      <span>
        <label htmlFor="weight">Weight:</label>
        <input name="weight" type="text" required onChange={inputHandler} />
      </span>
      <span>
        <label htmlFor="available">Available:</label>
        <input name="available" type="checkbox" onChange={inputHandler} />
      </span>
      <span>
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" required onChange={inputHandler} />
      </span>
      <span>
        <label htmlFor="customer">Customer:</label>
        <input name="customer" type="text" required onChange={inputHandler} />
      </span>
      <span>
        <button type="submit">Add</button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setModal({ isActive: false });
          }}
        >
          Cancel
        </button>
      </span>
    </form>
  );
};

export default ModalAdd;

// Наименование товара
// Вес товара
// Наличие на складе
// Дата заказа
// Заказчик

// "name": "fuck",
// "weight": "0.3 kg",
// "date": "11.12.1996",
// "available": true,
// "customer": "John"
