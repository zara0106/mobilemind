import { Link } from "react-router-dom";    
import "./matieres.css";
import Sidebar from "../../components/sidebar";
import Etudiant from "../etudiant";

function Matieres() {
  return (
    <div className="page">
      <div className="page__left">
        <Sidebar />
      </div>
      <div>
        <Etudiant/>
      </div>
    </div>
  );
}

export default Matieres;
