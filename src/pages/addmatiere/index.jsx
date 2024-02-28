import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Matiere from "../../components/matiere";
import Description from "../../components/description";
import Students from "../../components/students";
import Modal from "../../components/modal";
import './addmatiere.css';
import Niveaux from "../../components/niveaux";
import { useState } from "react";


function Addmatiere() {
  const [isShowModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((currentValue) => !currentValue);
  }
  return (
    <>
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
        
        </div>
      </div>

     
    </div>

    <Modal isShow={isShowModal}  toggleShow={toggleModal}>
        <div className="ajout_matiere">
          <h1 className="ajout_matter">Ajout matiere</h1>
          <p className="ajouters">Matiere</p>
          <input texte="texte" placeholder="ex: Html et CSS" className="ajout-input"/>
          <p className="ajouters">Heure</p>
          <div className="ajout_heure">
            <p className="ajout_paragraphe">7:30</p>
            <p>Jusqu'a </p>
            <p className="ajout_paragraphe" >7:30</p>
          </div>
          <div className="ajout_choisir">
            <p></p>
            <p className="ajout_annuler">Annuler</p>
            <p className="ajout_ajouter">Ajouter</p>
          </div>

        </div>

</Modal> 
</>
  );
}

export default Addmatiere;