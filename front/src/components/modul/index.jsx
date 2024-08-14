import React from "react";
import "./modul.css";

function Modul(props) {
  const { title, children ,isShow, toggleShow } = props;

  return (
    <>
      {isShow ? (
        <div className="modul">
          <div className="modul__content">
            <h1>{title}</h1>
            {children}
          </div>

          <button onClick={toggleShow} className="modul__overview"></button>
        </div>
      ) : null}
    </>
  );
}

export default Modul;
