import React, { useContext } from "react";
import bannerImg from "../assets/images/user.png";
import { DarkModeContext } from "../Context/DarkMoreProvider";

export const Banner = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark dark:bg-[#121212]" : "light bg-[#faf8ff]"}>
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="space-y-6 dark:text-white">
            <h2 className="text-7xl font-extrabold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="bg-hero-pattern text-transparent bg-clip-text">
                Dream Job
              </span>
            </h2>
            <p className="font-medium text-dark md:w-2/3">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn bg-hero-pattern text-xl font-extrabold text-white ">
              Get Started
            </button>
          </div>
          <div>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
