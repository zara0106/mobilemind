import React from "react";
import "./sidebar.css";
import MenuItem from "./menu-item";
import SubMenuItem from "./menu-item/sub-menu-item";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/images/logo.png" alt="logo" className="sidebar__logo" />

      <div className="sidebar__menu">
        {/* <div className="shape-top">
          <div className="shape-top--white"></div>
        </div> */}

        <div className="menu-contents">
          <MenuItem
            link="/"
            icon="material-symbols:dashboard"
            text="Tableau de bord"
          />
          <MenuItem link="/etudiant" icon="ph:student" text="Etudiants" />
          <SubMenuItem text="Niveau L1" />
          <SubMenuItem text="Niveau L2" />
          <SubMenuItem text="Niveau L3" />
          <SubMenuItem text="Niveau M1" />
          <SubMenuItem text="Niveau M2" />
          <MenuItem
            link="/matieres"
            icon="pajamas:list-bulleted"
            text="Liste matieres"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
