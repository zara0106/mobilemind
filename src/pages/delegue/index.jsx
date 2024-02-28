import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import "./delegue.css";
import Header from "../../components/header";
import Matiere from "../../components/matiere";
import Description from "../../components/description";
import Students from "../../components/students";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Niveaux from "../../components/niveaux"

function Delegue() {
  const [isShowModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((currentValue) => !currentValue);
  }

  return (
    <div className="page">
      <div className="page__left">
        <Sidebar />
      </div>
      <div className="page__right">
        <Header />
        <Niveaux/> 

        <div className="matieres">
          <p>Matieres : </p>
          <div className="listes__matieres">
            <Matiere matiere="Maths" heures="7:30 - 9:00" />
            <Matiere matiere="PC" heures="9:30 - 11:00" />
            <Matiere matiere="Algo" heures="13:30 - 16:00" active />
            <button onClick={toggleModal} className="plus">
              +
            </button>
          </div>
        </div>
        <div>
          <Description />
        </div>

        <div>
          <Students />
        </div>
      </div>

     
    </div>
  );
}

export default Delegue;
