import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../Context/DarkMoreProvider";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleDropDownToggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className={darkMode ? "dark dark:bg-[#121212]" : "light bg-[#faf8ff]"}>
      <div className="navbar w-11/12 md:w-9/12 mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={handleDropDownToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {openNav && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive
                        ? "bg-hero-pattern text-transparent bg-clip-text"
                        : "text-[#757575]"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="applied-job"
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive
                        ? "bg-hero-pattern text-transparent bg-clip-text"
                        : "text-[#757575]"
                    }`
                  }
                >
                  Applied Jobs
                </NavLink>
                <NavLink
                  to="blog"
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive
                        ? "bg-hero-pattern text-transparent bg-clip-text"
                        : "text-[#757575]"
                    }`
                  }
                >
                  Blog
                </NavLink>
                <NavLink className="mt-2 md:hidden">
                  <a className="btn text-sm font-extrabold px-4 bg-hero-pattern text-white w-full">
                    Start Applying
                  </a>
                </NavLink>
              </ul>
            )}
          </div>
          <Link className="font-extrabold text-3xl dark:text-white" to="/">
            CareerHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-9">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "bg-hero-pattern text-transparent bg-clip-text"
                    : "text-dark"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="applied-job"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "bg-hero-pattern text-transparent bg-clip-text"
                    : "text-dark"
                }`
              }
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "bg-hero-pattern text-transparent bg-clip-text"
                    : "text-dark"
                }`
              }
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn text-lg font-extrabold px-6 md:py-2 bg-hero-pattern text-white hidden lg:block">
            Start Applying
          </a>
          <div className="form-control">
            <label className="label cursor-pointer gap-2">
              <span className="label-text text-[#7d90fe]">
                {darkMode ? "Dark" : "Light"}
              </span>
              <input
                type="checkbox"
                className="toggle"
                defaultChecked={darkMode}
                onClick={toggleDarkMode}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};