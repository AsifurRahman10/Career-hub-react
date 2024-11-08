import { useLoaderData, useParams } from "react-router-dom";
import money from "../assets/icons/money.png";
import calender from "../assets/icons/calendar.png";
import phone from "../assets/icons/phone.png";
import message from "../assets/icons/email.png";
import location from "../assets/icons/location2.png";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkMoreProvider";
import { ApplyJobContext } from "../Context/ApplyJobProvider";

export const JobDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { darkMode } = useContext(DarkModeContext);
  const { handleApplyForJobs } = useContext(ApplyJobContext);
  const selectedJobDetails = data.find((job) => job.id === parseInt(id));
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = selectedJobDetails;
  return (
    <div
      className={`${
        darkMode ? "dark dark:bg-[#121212]" : "light bg-[#faf8ff]"
      }`}
    >
      <div className="flex flex-col md:flex-row w-11/12 md:w-9/12 mx-auto py-10 md:py-24 gap-6">
        <div className="space-y-4 flex-1">
          <p className=" text-dark font-medium">
            <span className="font-extrabold text-black dark:text-white">
              Job Description :
            </span>
            {job_description}
          </p>
          <p className=" text-dark font-medium">
            <span className="font-extrabold text-black dark:text-white">
              Job Responsibility :{" "}
            </span>
            {job_responsibility}
          </p>
          <p className="font-extrabold text-black dark:text-white">
            Educational Requirements :
          </p>
          <p className="text-dark font-medium">{educational_requirements}</p>
          <p className="font-extrabold text-black dark:text-white">
            Experiences:
          </p>
          <p className="text-dark font-medium">{experiences}</p>
        </div>
        <div className="bg-[#f4f1ff] p-8 rounded-lg space-y-4">
          <h2 className="text-2xl font-extrabold">Job Details</h2>
          <hr />
          <div className="flex items-center gap-1">
            <img src={money} alt="" />
            <span className="font-semibold text-lg text-dark">
              <span className="text-dark2">Salary</span> : {salary}
            </span>
          </div>
          <div className="flex items-start md:items-center gap-1">
            <img src={calender} alt="" />
            <span className="font-semibold text-lg text-dark">
              <span className="text-dark2">Job Title : </span>
              {job_title}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold">Contact Information</h2>
          <hr />
          <div className="flex items-center gap-1">
            <img src={phone} alt="" />
            <span className="font-semibold text-lg text-dark">
              <span className="text-dark2">Phone : </span>
              {contact_information?.phone}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img src={message} alt="" />
            <span className="font-semibold text-lg text-dark">
              <span className="text-dark2">Email : </span>
              {contact_information?.email}
            </span>
          </div>
          <div className="flex items-start md:items-center gap-1 pb-10">
            <img src={message} alt="" />
            <span className="font-semibold text-lg text-dark">
              <span className="text-dark2">Address : </span>
              {contact_information?.address}
            </span>
          </div>
          <button
            onClick={() => handleApplyForJobs(selectedJobDetails)}
            className="w-full bg-hero-pattern text-xl font-extrabold py-3 text-white rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
