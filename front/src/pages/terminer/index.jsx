import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Description from "../../components/description";
import Appel from "../../components/appel";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Niveaux from "../../components/niveaux";
import "./terminer.css";
import Modulo from "../../components/modulo";


function Terminer() {

  return (
    <div className="page">
      <div className="page__left">
        <Sidebar />
      </div>
      <div className="page__right">
        <Header />
        <Niveaux/> 
        <div>
          <Description />
        </div>

        <div>
          <Appel />
        </div>
      </div>

      <Modulo>
      <div>
        <p className="appel_paragraphe">Voulez vous vraiment terminer l'appel</p>
        <div className="confirm_choix">
            <div className="confirmation">
              <Icon icon="carbon:checkmark-outline" className="icon_confirmation"/>
              <p>OUI</p>
            </div>

            <div className="refuser">
              <Icon icon="material-symbols-light:cancel-outline-rounded" className="icon_confirmation"/>
              <p>NON</p>
            </div>
        </div>
      </div>

    </Modulo> 
    </div>
  );
}

export default Terminer;
