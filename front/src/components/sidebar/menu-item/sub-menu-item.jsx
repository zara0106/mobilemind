import React from "react";

function SubMenuItem(props) {
  const { text } = props;

  return <div className="menu-item__sub-item">{text}</div>;
}

export default SubMenuItem;
