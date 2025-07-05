// src/components/HowItWorks.jsx
import React from "react";
import WorkStep from "./WorkStep";

const steps = [
  {
    title: " Book Pickup",
    description: "Schedule your parcel pickup online or via app, hassle-free.",
    image: "/images/step1.png",
  },
  {
    title: " We Collect",
    description: "Our delivery agent picks up the parcel from your location.",
    image: "/images/step2.png",
  },
  {
    title: " In Transit",
    description: "Track your parcel in real time as it moves across cities.",
    image: "/images/step3.png",
  },
  {
    title: " Delivered",
    description: "Your package is safely delivered to the destination.",
    image: "/images/step4.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-gray-200 mt-3 mb-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <WorkStep
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
