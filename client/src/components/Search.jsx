import React from "react";
import styles from "./Search.module.scss";

const Search = ({ value, setSearch }) => {
  const { search } = styles;

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={search}>
      <input
        value={value}
        type="text"
        name="search"
        placeholder="Search by name or customer"
        onChange={searchChangeHandler}
      ></input>
    </div>
  );
};

export default Search;
