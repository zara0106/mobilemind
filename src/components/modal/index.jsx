import React from "react";
import "./modal.css";

function Modal(props) {
  const { title, children, isShow, toggleShow } = props;

  return (
    <>
      {isShow ? (
        <div className="modal-test">
          <div className="modal__content">
            <h1>{title}</h1>
            {children}
          </div>

          <button onClick={toggleShow} className="modal__overview"></button>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
