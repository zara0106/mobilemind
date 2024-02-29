import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Matiere from "../../components/matiere";
import Description from "../../components/description";
import Students from "../../components/students";
import Modal from "../../components/modal";
import  "./oui.css";
import { Icon } from "@iconify/react";
import Niveaux from "../../components/niveaux";
import { useState } from "react";


function Oui() {
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
           <Description/>
            
        </div>
        
        <div>
          <Students/>
        </div>

        <div>
        <Modal  isShow={isShowModal}  toggleShow={toggleModal}>
            <div className="scan">
                <img src="/images/user.jpg" alt="user" className="photo_image" />
                <p className="scan_paragraphe">TELOHAINGO Casey Emilie</p>
                <p>Scanner le code QR pour que le delegue puisse se connecter</p>
                <img src="/images/R 1.svg" alt="scan" className="scanner"/>
                <p className="scan_confirmer">CONFIRMER</p>
            
            </div>

        </Modal> 
        </div>
      </div>

     
    </div>
  );
}

export default Oui;