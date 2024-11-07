import { useContext } from "react";
import { Title } from "./Title";
import { JobDetailsData } from "../Context/JobDetailsProvider";
import { JobCart } from "./JobCart";

export const FeatureJobs = () => {
  const { jobDetails } = useContext(JobDetailsData);
  return (
    <div className="pb-24 w-11/12 md:w-9/12 mx-auto">
      <Title
        title="Featured Jobs"
        details="Explore thousands of job opportunities with all the information you need. Its your future"
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {jobDetails.map((item, index) => (
          <JobCart key={index} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-hero-pattern btn px-8 text-xl text-white font-extrabold mt-10 h-[60px]">
          See All Jobs
        </button>
      </div>
    </div>
  );
};
