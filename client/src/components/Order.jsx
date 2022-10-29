import React from "react";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import styles from "./Order.module.scss";

const Order = ({ order, setModal }) => {
  const { orderStyle, controls } = styles;

  const editHandler = () => {
    setModal({ isActive: true, type: "edit", source: order });
  };

  const deleteHandler = () => {
    setModal({ isActive: true, type: "delete", source: order });
  };

  return (
    <>
      <tr className={orderStyle}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{order.weight}</td>
        <td>{order.date}</td>
        <td>{order.available ? "yes" : "no"}</td>
        <td>{order.customer}</td>
        <td className={controls}>
          <button onClick={editHandler}>
            <img src={editIcon} alt="edit order" />
          </button>
          <button onClick={deleteHandler}>
            <img src={deleteIcon} alt="delete order" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Order;
