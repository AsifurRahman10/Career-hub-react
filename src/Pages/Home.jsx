import React from "react";
import { Banner } from "../Component/Banner";
import { JobCategories } from "../Component/JobCategories";
import { FeatureJobs } from "../Component/FeatureJobs";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategories></JobCategories>
      <FeatureJobs></FeatureJobs>
    </div>
  );
};
