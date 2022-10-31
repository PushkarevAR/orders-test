import React from "react";
import { orderSort } from "../utils/orderSort";
import Order from "./Order";

const Tbody = ({ orders, sortOrder, search, setModal }) => {
  const { type, isAscending } = sortOrder;
  const sortedOrders = orderSort(orders, type, isAscending, search);

  return (
    <tbody>
      {sortedOrders.map((order) => (
        <Order key={order.id} order={order} setModal={setModal} />
      ))}
    </tbody>
  );
};

export default Tbody;
