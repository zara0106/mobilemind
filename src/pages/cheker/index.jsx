import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Description from "../../components/description";
import Appel from "../../components/appel";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Niveaux from "../../components/niveaux";
import "./cheker.css"


function Cheker() {

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

     
    </div>
  );
}

export default Cheker;
