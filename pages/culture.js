import React from "react";
import Header from "../components/Header";

import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

const Histoire = () => {
  return (
    <div>
      <Header />
      <h2 className="title-category">Catégorie : culture</h2>
      <div className="container">
        <div className="container-category"></div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Histoire;
