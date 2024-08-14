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
import Modul from "../../components/modul";

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
      
      <div>
        <Modul  isShow={isShowModal}  toggleShow={toggleModal}>
          <div className="confirm">
          <p>Voulez vous vraiment definir <bold>Ceasy </bold>comme delegue(e)</p>
          <div className="confirm_choix">

            <div className="confirm_yes">
              <Icon icon="carbon:checkmark-outline"/>
              <p>Oui</p>
            </div>

            <div className="confirm_no">
              <Icon icon="material-symbols-light:cancel-outline-rounded"/>
              <p>Non</p>
            </div>
            
          
          </div>
         
          </div>
        </Modul> 
        </div>
     
    </div>
  );
}

export default Delegue;
