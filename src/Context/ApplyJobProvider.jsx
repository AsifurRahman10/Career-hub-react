import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ApplyJobContext = createContext();

export const ApplyJobProvider = ({ children }) => {
  const [appliedJob, setAppliedJobs] = useState([]);
  const handleApplyForJobs = (jobDetails) => {
    const checkForDuplicate = appliedJob.find(
      (item) => item.id === jobDetails.id
    );
    if (checkForDuplicate) {
      toast.error("You already applied for this jobs");
    } else {
      setAppliedJobs([...appliedJob, jobDetails]);
      toast.success("You have successfully applied for this post");
    }
  };

  return (
    <ApplyJobContext.Provider value={{ handleApplyForJobs, appliedJob }}>
      <Toaster toastOptions={{ duration: 2000 }} />
      {children}
    </ApplyJobContext.Provider>
  );
};
