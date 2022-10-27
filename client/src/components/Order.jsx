import React from "react";
import { editOrder, deleteOrder } from "../services/ordersAPI";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import styles from "./Order.module.scss";

const Order = ({ order }) => {
  const { orderStyle, controls } = styles;

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
          <button onClick={() => editOrder(order)}>
            <img src={editIcon} alt="edit order" />
          </button>
          <button onClick={() => deleteOrder(order)}>
            <img src={deleteIcon} alt="delete order" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Order;
