import React, { useContext } from "react";
import { Navbar } from "./Component/Navbar";
import { DarkModeContext } from "./Context/DarkMoreProvider";
import { Outlet } from "react-router-dom";
import { Footer } from "./Component/Footer";

export const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "bg-[#121212]" : "bg-white"}>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-498px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
