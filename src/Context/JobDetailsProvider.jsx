import React, { createContext, useEffect, useState } from "react";

export const JobDetailsData = createContext();

export const JobDetailsProvider = ({ children }) => {
  const [jobDetails, setJobDetails] = useState([]);
  useEffect(() => {
    fetch("../jobs.json")
      .then((res) => res.json())
      .then((data) => setJobDetails(data));
  }, []);
  return (
    <JobDetailsData.Provider value={{ jobDetails }}>
      {children}
    </JobDetailsData.Provider>
  );
};
