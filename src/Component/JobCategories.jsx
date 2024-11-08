import React, { useContext } from "react";
import { Title } from "./Title";
import { useLoaderData } from "react-router-dom";
import { CategoryCard } from "./CategoryCard";
import { DarkModeContext } from "../Context/DarkMoreProvider";

export const JobCategories = () => {
  const categoryData = useLoaderData();
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "dark dark:bg-[#121212]" : "light bg-white"}>
      <div className="pt-0 pb-10 md:py-24 w-11/12 md:w-9/12 mx-auto">
        <Title
          title="Job Category List"
          details="Explore thousands of job opportunities with all the information you need. It's your future"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {categoryData.map((category) => (
            <CategoryCard category={category} key={category.id}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};
