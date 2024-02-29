import React from "react";
import "./modulo.css";

function Modulo(props) {
  const { title, children } = props;

  return (
    <div className="modulo">
      <div className="modulo__content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Modulo;