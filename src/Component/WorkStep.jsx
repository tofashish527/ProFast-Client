// src/components/WorkStep.jsx
import React from "react";
import delivery from "../assets/img/bookingIcon.png"

const WorkStep = ({ title, description }) => {
  return (
    <div className="relative bg-base-100 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition duration-300">
      <img
        src={delivery}
        alt={title}
        className="w-10 h-10 mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 mt-6">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default WorkStep;
