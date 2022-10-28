import React from "react";

const ModalAdd = ({ closeModal }) => {
  return (
    <>
      <h3>Add new order:</h3>
      <span>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" />
      </span>
      <span>
        <label htmlFor="weight">Weight:</label>
        <input name="weight" type="text" />
      </span>
      <span>
        <label htmlFor="available">Available:</label>
        <input name="available" type="checkbox" />
      </span>
      <span>
        <label htmlFor="date">Date:</label>
        <input name="date" type="date" />
      </span>
      <span>
        <label htmlFor="customer">Customer:</label>
        <input name="customer" type="text" />
      </span>
      <span>
        <button>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </span>
    </>
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
