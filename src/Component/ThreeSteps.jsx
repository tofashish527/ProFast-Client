// src/components/ThreeStepsSection.jsx
import React from "react";
import img1 from "../assets/img/live-tracking.png";
import img2 from "../assets/img/location-merchant.png";
import img3 from "../assets/img/safe-delivery.png";

const steps = [
  {
    title: "Live Parcel Tracking",
    description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: img1,
  },
  {
    title: "100% Safe Delivery",
    description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: img2,
  },
  {
    title: "24/7 Service",
    description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: img3,
  },
];

const ThreeStepsSection = () => {
  return (
    <section className="py-10 px-4 lg:px-20 bg-base-100">
      <div className="max-w-6xl mx-auto space-y-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-base-200 py-8 rounded-xl items-center gap-4 md:gap-12"
          >
            {/* Left: Text */}
            <div className="flex-1 text-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-40 h-40 object-contain mx-auto"
              />
            </div>

            {/* Vertical dashed divider */}
            <div className="hidden md:flex h-24 border-l-2 border-dashed border-gray-300"></div>

            {/* Right: Image */}
             <div className="flex-1 text-left">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeStepsSection;
