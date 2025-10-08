import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
