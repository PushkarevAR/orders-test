import React, { useContext } from "react";
import { getOrders, editOrder, deleteOrder } from "../services/ordersAPI";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import styles from "./Order.module.scss";
import { Context } from "..";

const Order = ({ order }) => {
  const { orderStyle, controls } = styles;
  const { orderStore } = useContext(Context);

  const editHandler = () => {
    editOrder(order)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders));
  };

  const deleteHandler = () => {
    deleteOrder(order)
      .then(() => getOrders())
      .then((orders) => orderStore.setOrders(orders));
  };

  //getOrders().then((orders) => orderStore.setOrders(orders))

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
