import React from "react";

const ModalEdit = ({ closeModal }) => {
  return (
    <>
      <h3>Edit order:</h3>
      <span>
        <label htmlFor="customer">Customer:</label>
        <input name="customer" type="text" />
      </span>
      <span>
        <label htmlFor="available">Available:</label>
        <input name="available" type="checkbox" />
      </span>
      <span>
        <button>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </span>
    </>
  );
};

export default ModalEdit;

// Наличие на складе
// Заказчик
