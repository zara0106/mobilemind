import { Icon } from "@iconify/react";
import React from "react";

function SearchBar() {
  return (
    <div className="search-bar">
      <Icon icon="iconamoon:search-thin" className="search-bar__icon" />
      <input
        type="text"
        placeholder="Recherche"
        className="search-bar__input"
      />
    </div>
  );
}

export default SearchBar;
