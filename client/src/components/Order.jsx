import React from "react";
import { editOrder, deleteOrder } from "../services/ordersAPI";

const Order = ({ order }) => {
  return(
    <>
      <tr>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{order.weight}</td>
        <td>{order.date}</td>
        <td>{order.available ? 'yes' : 'no'}</td>
        <td>{order.customer}</td>
        <td>
          <button onClick={() => editOrder(order)}>Edit</button>
          <button onClick={() => deleteOrder(order)}>Delete</button>
        </td>
      </tr>
    </>
  )
};

export default Order;