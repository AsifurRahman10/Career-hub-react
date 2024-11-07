import React from "react";

export const Title = ({ title, details }) => {
  return (
    <div className="text-black space-y-3 text-center py-4 dark:text-white">
      <h2 className="text-5xl font-extrabold">{title}</h2>
      <p className="text-dark font-medium">{details}</p>
    </div>
  );
};
