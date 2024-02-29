import React from "react";
import "./students.css";
import { Icon } from "@iconify/react";

function Students() {
  function toggleModal() {
    setShowModal((currentValue) => !currentValue);
  }
  return (
    <div>
      <table className="table_students">
        <thead>
          <tr>
            <th>N</th>
            <th>N matricule</th>
            <th>Nom et prenoms</th>
            <th>Numero de telephone</th>
            <th>Statut</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table_bordure1">
            <td>1</td>
            <td>1500</td>
            <td>
              <div className="name">
                {" "}
                <div className="name-circle"></div>{" "}
                <span>NOMENJANAHARIZARA Fifaliantsoa</span>
              </div>
            </td>
            <td>0340644427</td>
            <td>
              <p className="absent">Absent</p>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>1500</td>
            <td>
              {" "}
              <div className="name">
                {" "}
                <div className="name-circle"></div>{" "}
                <span>NOMENJANAHARIZARA Fifaliantsoa</span>
              </div>{" "}
            </td>
            <td>0340644427</td>
            <td>
              <button onClick={toggleModal} className="presence">
                <p>Presente</p>
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>1500</td>
            <td>
              {" "}
              <div className="name">
                {" "}
                <div className="name-circle"></div>{" "}
                <span>NOMENJANAHARIZARA Fifaliantsoa</span>
              </div>{" "}
            </td>
            <td>0340644427</td>
            <td>
            <div className="dropdown dropdown-end flex">
              
          <div tabIndex={0} role="button" className="botton"> <p className="presence">Present</p> <Icon icon="eva:more-vertical-fill"/></div>
          <ul tabIndex={0} className="dropdown-content shadow p-2 bg-base-100 rounded-box w-52">
            <li className="suprimer">
            <Icon icon="fluent:edit-20-regular" className="iconess"/>
              <a>Definir comme delegue</a>
            
              </li>
         
          </ul>
        </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;
