import React from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Profiles from "../../components/profiles";

function Profil() {
  return (
    <div className="page">
      <div className="page__left">
        <Sidebar />
      </div>
      <div className="page__right">
        <Header />
        <div>
          <Profiles/>
        </div>
      </div>


  
    </div>
  );
}

export default Profil;