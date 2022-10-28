import React from "react";

const ModalDelete = ({ closeModal }) => {
  return (
    <>
      <h3>Are you sure you want to permanently delete order?</h3>
      <span>
        <button>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </span>
    </>
  );
};

export default ModalDelete;