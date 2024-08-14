import React from "react";
import { Icon } from "@iconify/react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Modals from "../../components/modals";
import "./searche.css";
import Dash from "../../components/dash";

function Searche() {

  return (
    <div className="page">
      <div className="page__left">
        <Sidebar />
      </div>
      <div className="page__right">
        <Header />
        <Dash/>
      </div>

      <Modals>
        <div className="modals_icon">
            <Icon icon="fluent:search-28-regular" className="icones"/>
            <input placeholder="Recherche"/>
        </div>
        <div>
            <p className="modals_recent">Recent</p>
        </div>
        <div className="modals_matiere">
            <p>Statistique</p>
            <p className="modals_text">X</p>
        </div>
      </Modals>
  
    </div>
  );
}

export default Searche;
