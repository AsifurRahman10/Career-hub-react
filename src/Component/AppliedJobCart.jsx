import React from "react";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export const AppliedJobCart = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
  } = job;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-2 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-[#f4f4f4] flex justify-center items-center px-8 py-16 rounded-lg">
          <img className="w-full md:w-[150px]" src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-dark2">{job_title}</h2>
          <p className="text-xl text-dark font-semibold mt-2">{company_name}</p>
          <p className="text-[#7E90FE] font-extrabold px-5 py-2 border-[1px] border-[#7E90FE] rounded w-fit mt-3">
            {remote_or_onsite === "Remote" ? "Remote" : "Onsite"}
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              <CiLocationOn className="font-semibold text-xl text-dark" />
              <span className="font-semibold text-lg text-dark">
                {location}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CiDollar className="font-semibold text-xl text-dark" />
              <span className="font-semibold text-lg text-dark">
                Salary : {salary}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Link to={`/jobDetails/${id}`}>
          <button className="btn text-white bg-hero-pattern">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
