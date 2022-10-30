import React from "react";
import { orderSort } from "../utils/orderSort";
import Order from "./Order";

const Tbody = ({ orderStore, sortOrder, search, setModal }) => {
  return (
    <tbody>
      {orderSort(
        orderStore.orders,
        sortOrder.type,
        sortOrder.isAscending,
        search
      ).map((order) => (
        <Order key={order.id} order={order} setModal={setModal} />
      ))}
    </tbody>
  );
};

export default Tbody;
