// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description, icon: Icon}) => {
  return (
    <div className="bg-base-100 shadow-md rounded-xl p-6 hover:bg-cyan-500 transition-all duration-300 border">
      <div className="mb-4 text-primary mx-auto ml-35 text-4xl">
        <Icon></Icon>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
