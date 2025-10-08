import React from "react";
import "../css/components.css"
import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-auto flex border justify-center items-center ">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
