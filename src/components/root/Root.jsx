import React from "react";
import "../css/components.css";
import { Outlet, useNavigation } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

const Root = () => {
  // global pending navigation must use in the global component where the Outlet is located
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header></Header>
      {/* loading spinner  */}
      {isNavigating && <span className="bg-gray-500 py-1 px-4 rounded ">Loading...</span>}
      <div className="mx-auto flex border justify-center items-start  ">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
