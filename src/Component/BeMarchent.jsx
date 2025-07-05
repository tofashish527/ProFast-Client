

import React from 'react';

import marchent from "../assets/img/location-merchant.png";
import bgImage from "../assets/img/be-a-merchant-bg.png";

const BeMarchent = () => {
  return (
    <div data-aos="flip-left" className="relative bg-cyan-900 py-20 mb-5 px-10 overflow-hidden">
      <img
        src={bgImage}
        alt="merchant background"
        className="absolute top-0 left-0 z-0"
      />

      <div className="relative z-10 hero-content flex-col lg:flex-row-reverse items-center max-w-7xl mx-auto">
        <img
          src={marchent}
          className="max-w-sm rounded-lg"
          alt="Merchant"
        />
        <div className="mt-10 lg:mt-0 lg:mr-10">
          <h1 className="text-4xl font-bold text-white">
            Merchant and Customer Satisfaction<br />is Our First Priority
          </h1>
          <p className="py-6 text-white">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. ProFast Courier delivers your parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn bg-lime-300 text-black rounded-2xl">
              Become A Merchant
            </button>
            <button className="btn rounded-2xl border border-lime-500 bg-transparent text-lime-500">
              Earn With ProFast Courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMarchent;
