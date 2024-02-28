import React from "react";
import "./students.css";

function Students() {
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
              <p className="presence">Present</p>
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
              <p className="presence">Present</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;
