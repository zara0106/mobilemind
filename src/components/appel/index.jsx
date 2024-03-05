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
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
            </td>
            <td>
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
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
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
            </td>
            <td>
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
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
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
            </td>
            <td>
              <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
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
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
            </td>
            <td>
            <input type="checkbox" className="checkbox bg-red-600 checkbox-lg  [--chkbg:#008000] [--chkfg:white]"/>
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
