import React from "react";
// isActive: true, type: "info", source: order
const ModalInfo = ({ order, type, closeModal }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    closeModal();
  };

  const switchModal = (type) => {
    switch (type) {
      case "edit":
        return (
          <h3>
            Your order: <b>{order.name}</b>, has been edited successfully.
          </h3>
        );
      case "delete":
        return (
          <h3>
            You have successfully deleted the order : <b>{order.name}</b>.
          </h3>
        );
      case "add":
        return (
          <h3>
            Your order : <b>{order.name}</b>, has been created successfully
          </h3>
        );
      default:
        return <></>;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {switchModal(type)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalInfo;
