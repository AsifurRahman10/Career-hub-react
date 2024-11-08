import { useContext, useEffect, useState } from "react";
import { Title } from "./Title";
import { JobDetailsData } from "../Context/JobDetailsProvider";
import { JobCart } from "./JobCart";
import { DarkModeContext } from "../Context/DarkMoreProvider";

export const FeatureJobs = () => {
  const { jobDetails } = useContext(JobDetailsData);
  const { darkMode } = useContext(DarkModeContext);
  const [displayJOb, setDisplayJOb] = useState([]);
  useEffect(() => {
    const defaultJobs = jobDetails.slice(0, 4);
    setDisplayJOb(defaultJobs);
  }, [jobDetails]);

  const handleSeeAllJobs = () => {
    setDisplayJOb(jobDetails);
  };
  return (
    <div className={darkMode ? "dark dark:bg-[#121212]" : "light bg-white"}>
      <div className="pb-6 md:pb-24 w-11/12 md:w-9/12 mx-auto">
        <Title
          title="Featured Jobs"
          details="Explore thousands of job opportunities with all the information you need. Its your future"
        ></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {displayJOb.map((item, index) => (
            <JobCart key={index} item={item} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleSeeAllJobs}
            className="bg-hero-pattern btn px-8 text-xl text-white font-extrabold mt-10 h-[60px]"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};
