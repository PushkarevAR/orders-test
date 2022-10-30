import React from "react";
import styles from "./Thead.module.scss";
import arrow from "../assets/arrow.svg";

const Thead = ({ sortOrder, setSortOrder }) => {
  const { id, header } = styles;

  const sortOrderHandler = (type) =>
    setSortOrder({ type, isAscending: !sortOrder.isAscending });

  return (
    <thead className={header}>
      <tr>
        <th className={id} onClick={() => sortOrderHandler("id")}>
          <button>ID</button>
          <img src={arrow} alt="sort by date" />
        </th>
        <th onClick={() => sortOrderHandler("name")}>
          <button>Name</button>
          <img src={arrow} alt="sort by date" />
        </th>
        <th>Weigth</th>
        <th onClick={() => sortOrderHandler("date")}>
          <button>Date</button>
          <img src={arrow} alt="sort by date" />
        </th>
        <th>Available</th>
        <th>Customer</th>
      </tr>
    </thead>
  );
};

export default Thead;
