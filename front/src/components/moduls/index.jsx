import React from "react";
import "./moduls.css";

function Moduls(props) {
  const { title, children } = props;

  return (
    <div className="moduls">
      <div className="moduls__content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Moduls;