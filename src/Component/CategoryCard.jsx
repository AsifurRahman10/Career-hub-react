import React from "react";

export const CategoryCard = ({ category }) => {
  const { availability, category_name, logo } = category;
  return (
    <div className="bg-[#f9f9ff] p-9 rounded-lg">
      <img className="p-4 bg-[#efecff] rounded-lg" src={logo} alt="" />
      <h2 className="text-dark2 text-xl font-extrabold mt-8">
        {category_name}
      </h2>
      <p className="text-dark font-medium mt-2">{availability}</p>
    </div>
  );
};
