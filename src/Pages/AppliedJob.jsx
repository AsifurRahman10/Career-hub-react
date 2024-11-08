import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ApplyJobContext } from "../Context/ApplyJobProvider";
import { AppliedJobCart } from "../Component/AppliedJobCart";

export const AppliedJob = () => {
  const data = useLoaderData();
  const { appliedJob } = useContext(ApplyJobContext);
  return (
    <div className="w-11/12 md:w-9/12 mx-auto py-24 space-y-6">
      {appliedJob.map((job) => (
        <AppliedJobCart job={job} key={job.id}></AppliedJobCart>
      ))}
    </div>
  );
};
