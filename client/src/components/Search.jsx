import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  const { search } = styles;

  return (
    <div className={search}>
      <input type="text" name="search" placeholder="Search"></input>
    </div>
  );
};

export default Search;
