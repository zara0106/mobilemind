import React from "react";
import "./matiere.css";
import { Icon } from "@iconify/react";

function Matiere(props) {
  const { matiere, heures, active } = props;

  return (
    <div className={active ? "matiere matiere--active" : "matiere"}>
      <div className="matiere__header">
        <p>{matiere}</p>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button"> <Icon icon="prime:ellipsis-v" /></div>
          <ul tabIndex={0} className="dropdown-content shadow p-2 bg-base-100 rounded-box w-52">
            <li className="suprimer">
              <Icon icon="mingcute:pencil-fill" className="icones"/>
              <a>Modifier</a>
              </li>
            <li className="suprimer">
              <Icon icon="maki:waste-basket" className="icones"/>
              <a>Supprimer</a>
              </li>
          </ul>
        </div>
      </div>

      <p>{heures}</p>
    </div>
  );
}

export default Matiere;
