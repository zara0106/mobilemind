import React from "react";
import "./modals.css";

function Modals(props) {
  const { title, children } = props;

  return (
    <div className="modals">
    <div className="modals__content">
      <h1>{title}</h1>
      {children}
    </div>
  </div>
  );
}

export default Modals;
