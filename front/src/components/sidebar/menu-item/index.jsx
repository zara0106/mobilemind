import React from "react";
import { Icon } from "@iconify/react";
import "./menu-item.css";
import { Link, NavLink } from "react-router-dom";

function MenuItem(props) {
  const { icon, text, link } = props;

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "menu-item menu-item--active" : "menu-item"
      }
    >
      <Icon icon={icon} className="menu-item__icon" />
      <span className="menu-item__text">{text}</span>
    </NavLink>
  );
}

export default MenuItem;
