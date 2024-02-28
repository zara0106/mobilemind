import React from "react";
import { Icon } from "@iconify/react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Moduls from "../../components/moduls";
import "./searcheactive.css";
import Dash from "../../components/dash";


function Searcheactive() {
  return (
    <div className="page">
      <div className="page__left">
        <Sidebar />
      </div>
      <div className="page__right">
        <Header />
        <Dash/>
      </div>

      <Moduls>
        <div className="modal_icon">
            <Icon icon="fluent:search-28-regular" className="icon"/>
            <p>Rakoto</p>
        </div>
        <div>
            <p className="modal_paragraphe">Liste etudiants</p>
            <p className="modal_recente">Rakoto</p>
        </div>
        <div>
            <p className="modal_paragraphe">Profile etudiants</p>
            <p className="modal_matiere">Rakoto</p>
        </div>
      </Moduls>
  
    </div>
  );
}

export default Searcheactive;