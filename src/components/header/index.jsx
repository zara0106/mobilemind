import { Icon } from "@iconify/react";
import React from "react";
import SearchBar from "./search-bar";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <SearchBar />
      <div className="header__right">
        <div className="notifications">
          <Icon icon="mdi:bell" />
        </div>

        <div className="header__user">
          <img src="/images/user.jpg" alt="user" className="user-image" />
          <span>Safidy M.</span>
          <Icon icon="fa-solid:sort-down" className="icon-sort-down" />
        </div>
      </div>
    </header>
  );
}

export default Header;
