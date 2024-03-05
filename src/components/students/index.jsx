import React from "react";
import "./students.css";
import { Icon } from "@iconify/react";
import Modul from "../modul";
import { useState } from "react";

function Students() {
  const [isShowModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal((currentValue) => !currentValue);
  }
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
            <tr className="table_bordure1">
              <td>1</td>
              <td>1500</td>
              <td>
                <div className="name">
                  {" "}
                  <div className="name-circle"></div>{" "}
                  <span>RAMAMONJISOA Jedidia</span>
                </div>
              </td>
              <td>0340452369</td>
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

                  <div tabIndex={0} role="button" className="botton  w-full flex"> <p className="presence flex-1">Present</p>    <button onClick={toggleModal} className=""><Icon icon="eva:more-vertical-fill" /></button></div>
                  <button onClick={toggleModal} tabIndex={0} className="dropdown-content shadow p-2 bg-base-100 rounded-box w-52">
                    <li className="suprimer">
                      <Icon icon="fluent:edit-20-regular" className="iconess" />
                      <a>Definir comme delegue</a>

                    </li>

                  </button>
                </div>
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
                  <span>TELOHAINGO Emilie Casey</span>
                </div>{" "}
              </td>
              <td>0340644427</td>
              <td>
                <div className="dropdown dropdown-end flex">

                  <div tabIndex={0} role="button" className="botton  w-full flex"> <p className="presence flex-1">Present</p>    <button onClick={toggleModal} className=""><Icon icon="eva:more-vertical-fill" /></button></div>
                  <button onClick={toggleModal} tabIndex={0} className="dropdown-content shadow p-2 bg-base-100 rounded-box w-52">
                    <li className="suprimer">
                      <Icon icon="fluent:edit-20-regular" className="iconess" />
                      <a>Definir comme delegue</a>

                    </li>

                  </button>
                </div>
              </td>
            </tr>
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
