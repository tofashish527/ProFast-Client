// src/components/ScrollingLogos.jsx
import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../assets/brands/amazon.png";
import logo2 from "../assets/brands/casio.png";
import logo3 from "../assets/brands/moonstar.png";
import logo4 from "../assets/brands/randstad.png";
import logo5 from "../assets/brands/start.png";
import logo6 from "../assets/brands/start-people 1.png";
import logo7 from "../assets/brands/amazon_vector.png";
import ThreeStepsSection from "./ThreeSteps";
import BeMarchent from "./BeMarchent";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ScrollingLogos = () => {
  return (
    <div>
        <h1 className="text-center text-2xl font-semibold mb-5 text-green-800 mt-12 ">We've helped thousands of sales teams</h1>
      <section className="bg-base py-4">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-5 mx-8"
          />
        ))}
      </Marquee>
    </section>
    <div className="border-b border-dashed border-gray-400 mt-10 mb-2"></div>
    <ThreeStepsSection></ThreeStepsSection>
    <div className="border-b border-dashed border-gray-400 mt-4 mb-10"></div>
    <BeMarchent></BeMarchent>
    </div>
  );
};

export default ScrollingLogos;
