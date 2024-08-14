import React from "react";
import "./modul.css";

function Modul(props) {
  const { title, children } = props;

  return (
    <div className="modul">
      <div className="modul__content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Modul;