import React from "react";
import searchBoxStyles from "./index.module.css";

export const SearchBox = () => {
  return (
    <input
      type="search"
      className={searchBoxStyles.input}
      placeholder="Search"
    />
  );
};
