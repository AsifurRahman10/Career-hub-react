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
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
