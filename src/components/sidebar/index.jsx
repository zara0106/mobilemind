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
            link= "/cheker"
            icon="fluent:phone-20-regular"
            text="Liste d'appel"
          />
          
          <MenuItem
            link="/"
            icon="material-symbols:dashboard"
            text="Tableau de bord"
          />
          <MenuItem
            link="/listes"
            icon="pajamas:list-bulleted"
            text="Liste etudiant"
          />

          <MenuItem
            link="/profil"
            icon ="fa-solid:chalkboard-teacher"
            text="Profil des etudiant"
          />
          <MenuItem link="/etudiant" icon="ph:student" text="Etudiants" />
          <SubMenuItem text="Niveau L1" />
          <SubMenuItem text="Niveau L2" />
          <SubMenuItem text="Niveau L3" />
          <SubMenuItem text="Niveau M1" />
          <SubMenuItem text="Niveau M2" />
        
        
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
