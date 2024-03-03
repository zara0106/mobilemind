import React from "react";
import "./appel.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Appel() {

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
            <th>Present</th>
            <th>Absent</th>
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
            <td>
               <Icon icon="ic:twotone-done" className="accepter_present"/>
            </td>
            <td>
              <p className="absente"></p>
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
            <td>
               <Icon icon="clarity:close-line" className="accepter_absent"/>
            </td>
            <td>
              <p className="presences"></p>
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
            <td>
                <p className="presences"></p>
            </td>
            <td>
              <Icon icon="clarity:close-line" className="accepter_absent"/>
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
            <td>
                <p className="absente"></p>
            </td>
            <td>
              <Icon icon="ic:twotone-done" className="accepter_present"/>
            </td>
          </tr>
        </tbody>
      </table>
        <Link to="/terminer" className="appel_terminer">
              Terminer
        </Link>
    </div>
  );
}

export default Appel;
