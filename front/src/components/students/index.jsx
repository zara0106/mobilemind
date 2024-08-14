import React, { useEffect } from "react";
import "./students.css";
import { Icon } from "@iconify/react";
import Modul from "../modul";
import { useState } from "react";
import axios from "axios";

function Students({activeLevel,activeFiliere, search}) {
  const [isShowModal, setShowModal] = useState(false);
  const [students , setStudents] = useState([])
  function toggleModal() {
    setShowModal((currentValue) => !currentValue);
  }

  const getStudents = () => {
    axios.get("http://localhost:3000/students").then((res) => setStudents(res.data))
  }

  useEffect(() => {
    getStudents()
  }, [])



  return (
    <div>
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
            {students?.filter((item) => item?.level?.id == activeLevel).filter(item => item.firstName.includes(search) && item.filiere?.abreviation === activeFiliere)?.map((item, index) => <tr key={index} className="table_bordure1">
              <td>{item.matriculate}</td>
              <td>{item.matriculate}</td>
              <td>
                <div className="name">
                  {" "}
                  <div className="name-circle"></div>{" "}
                  <span>{item.lastName} {item.firstName}</span>
                </div>
              </td>
              <td>{item.phone}</td>
              <td>
                <div className="dropdown dropdown-end flex">

                  <div tabIndex={0} role="button" className="botton  w-full flex"> <p className="absent flex-1">Absente</p>    <button onClick={toggleModal} className=""><Icon icon="eva:more-vertical-fill" /></button></div>
                  <button onClick={toggleModal} tabIndex={0} className="dropdown-content shadow p-2 bg-base-100 rounded-box w-52">
                    <li className="suprimer">
                      <Icon icon="fluent:edit-20-regular" className="iconess" />
                      <a>Definir comme delegue</a>

                    </li>

                  </button>
                </div>
              </td>
            </tr>)}
            
          </tbody>
        </table>

      </div>
      <div>
        <Modul isShow={isShowModal} toggleShow={toggleModal}>
          <div className="confirm">
            <p>Voulez vous vraiment definir <bold>Ceasy </bold>comme delegue(e)</p>
            <div className="confirm_choix">

              <div className="confirm_yes">
                <Icon icon="carbon:checkmark-outline" />
                <p>Oui</p>
              </div>

              <div className="confirm_no">
                <Icon icon="material-symbols-light:cancel-outline-rounded" />
                <p>Non</p>
              </div>


            </div>

          </div>
        </Modul>
      </div>
    </div>

  );
}

export default Students;
