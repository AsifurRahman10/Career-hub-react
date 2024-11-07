import React from "react";
import { CiLocationOn, CiDollar } from "react-icons/ci";

export const JobCart = ({ item }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, salary } =
    item;
  return (
    <div className="border-2 p-9 rounded-lg">
      <img src={logo} alt="" />
      <h2 className="text-2xl font-extrabold text-dark2 mt-8">{job_title}</h2>
      <p className="text-xl text-dark font-semibold mt-2">{company_name}</p>
      <p className="text-[#7E90FE] font-extrabold px-5 py-2 border-[1px] border-[#7E90FE] rounded w-fit mt-3">
        {remote_or_onsite === "Remote" ? "Remote" : "Onsite"}
      </p>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center gap-1">
          <CiLocationOn className="font-semibold text-xl text-dark" />
          <span className="font-semibold text-lg text-dark">{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <CiDollar className="font-semibold text-xl text-dark" />
          <span className="font-semibold text-lg text-dark">
            Salary : {salary}
          </span>
        </div>
      </div>
      <button className="bg-hero-pattern btn px-6 text-white font-extrabold mt-6">
        View Details
      </button>
    </div>
  );
};
