import React from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Modal from "../../components/modal";
import Dash from "../../components/dash";


function Dashboard() {
  return (
    <>
      <div className="page">
        <div className="page__left">
          <Sidebar />
        </div>
        <div className="page__right flex flex-col">
          <Header />
          <Dash/>
        </div>
      </div>
    
    </>
  );
}

export default Dashboard;
