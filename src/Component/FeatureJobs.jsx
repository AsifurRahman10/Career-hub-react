import { useContext } from "react";
import { Title } from "./Title";
import { JobDetailsData } from "../Context/JobDetailsProvider";
import { JobCart } from "./JobCart";

export const FeatureJobs = () => {
  const { jobDetails } = useContext(JobDetailsData);
  console.log(jobDetails);
  return (
    <div className="pb-24">
      <Title
        title="Featured Jobs"
        details="Explore thousands of job opportunities with all the information you need. Its your future"
      ></Title>
      <div>
        {jobDetails.map((job) => (
          <JobCart job={job}></JobCart>
        ))}
      </div>
    </div>
  );
};
