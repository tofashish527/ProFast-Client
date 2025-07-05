// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
// import reviewer from "../assets/img/image-upload-icon.png"; 
// import reviewTopIcon from "../assets/img/customer-top.png";

// const reviews = [
//   {
//     text: "ProFast made my deliveries super smooth and reliable.",
//     name: "Ayesha Rahman",
//     position: "Online Seller",
//     image: reviewer,
//   },
//   {
//     text: "Their real-time tracking helped me win customer trust!",
//     name: "Tanvir Hasan",
//     position: "E-commerce Owner",
//     image: reviewer,
//   },
//   {
//     text: "Highly professional delivery across all districts.",
//     name: "Rifat Karim",
//     position: "Business Owner",
//     image: reviewer,
//   },
//   {
//     text: "Love the COD and fast pickup system!",
//     name: "Faria Islam",
//     position: "Small Business Owner",
//     image: reviewer,
//   },
//   {
//     text: "ProFast helped me scale delivery nationwide.",
//     name: "Sadia Jahan",
//     position: "Shop Manager",
//     image: reviewer,
//   },
//   {
//     text: "Pickup to doorstep within 24 hours. Amazing!",
//     name: "Mizanur Rahman",
//     position: "Retailer",
//     image: reviewer,
//   },
// ];

// const Review = () => {
//   const [current, setCurrent] = useState(0);

//   const prev = () =>
//     setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   const next = () =>
//     setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

//   const getIndex = (offset) => (current + offset + reviews.length) % reviews.length;

//   return (
//     <section className="py-16 px-4 lg:px-20 bg-base-100 text-center relative">
//       {/* Heading */}
//       <div className="max-w-3xl mx-auto mb-10">
//         <img src={reviewTopIcon} alt="Review Icon" className="mx-auto h-12 mb-4" />
//         <h2 className="text-3xl font-bold mb-3">What Our Customers Are Saying</h2>
//         <p className="text-gray-600">
//           Enhance posture, mobility, and well-being effortlessly with ProFast. Achieve proper alignment,
//           reduce pain, and strengthen your logistics with ease!
//         </p>
//       </div>

//       {/* 3-Card Carousel (No scroll) */}
//       <div className="flex justify-center items-center gap-6 relative">
//         {/* Left card */}
//         <div className="w-[300px] transform scale-90 opacity-40 transition-all duration-300">
//           <ReviewCard review={reviews[getIndex(-1)]} />
//         </div>

//         {/* Center card */}
//         <div className="w-[340px] transform scale-100 opacity-100 z-10 transition-all duration-300">
//           <ReviewCard review={reviews[getIndex(0)]} />
//         </div>

//         {/* Right card */}
//         <div className="w-[300px] transform scale-90 opacity-40 transition-all duration-300">
//           <ReviewCard review={reviews[getIndex(1)]} />
//         </div>
//       </div>

//       {/* Arrows + Dots */}
//       <div className="mt-8 flex justify-center items-center gap-6">
//         <button onClick={prev} className="btn btn-sm btn-outline text-primary rounded-full">
//           <FaArrowLeft />
//         </button>
//         <div className="flex gap-2">
//           {reviews.map((_, index) => (
//             <span
//               key={index}
//               className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                 index === current ? "bg-primary scale-125" : "bg-gray-300"
//               }`}
//             ></span>
//           ))}
//         </div>
//         <button onClick={next} className="btn btn-sm btn-outline text-primary rounded-full">
//           <FaArrowRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// // Individual Review Card
// const ReviewCard = ({ review }) => (
//   <div className="rounded-xl p-6 shadow-lg bg-base-200 text-center">
//     <FaQuoteLeft className="text-3xl text-primary mb-4 mx-auto" />
//     <p className="text-sm text-gray-700 mb-4">{review.text}</p>
//     <div className="border-b border-dashed border-gray-400 w-20 mx-auto mb-4"></div>
//     <div className="flex flex-col items-center">
//       <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mb-2" />
//       <h4 className="font-semibold">{review.name}</h4>
//       <span className="text-xs text-gray-500">{review.position}</span>
//     </div>
//   </div>
// );

// export default Review;

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import reviewer from "../assets/img/image-upload-icon.png";
import reviewTopIcon from "../assets/img/customer-top.png";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    text: "ProFast made my deliveries super smooth and reliable.",
    name: "Ayesha Rahman",
    position: "Online Seller",
    image: reviewer,
  },
  {
    text: "Their real-time tracking helped me win customer trust!",
    name: "Tanvir Hasan",
    position: "E-commerce Owner",
    image: reviewer,
  },
  {
    text: "Highly professional delivery across all districts.",
    name: "Rifat Karim",
    position: "Business Owner",
    image: reviewer,
  },
  {
    text: "Love the COD and fast pickup system!",
    name: "Faria Islam",
    position: "Small Business Owner",
    image: reviewer,
  },
  {
    text: "ProFast helped me scale delivery nationwide.",
    name: "Sadia Jahan",
    position: "Shop Manager",
    image: reviewer,
  },
  {
    text: "Pickup to doorstep within 24 hours. Amazing!",
    name: "Mizanur Rahman",
    position: "Retailer",
    image: reviewer,
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  const getIndex = (offset) => (current + offset + reviews.length) % reviews.length;

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="py-16 px-4 lg:px-20 bg-base-100 text-center relative">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-10">
        <img src={reviewTopIcon} alt="Review Icon" className="mx-auto h-30 w-50 mb-4" />
        <h2 className="text-3xl font-bold mb-3">What Our Customers Are Saying</h2>
        <p className="text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with ProFast. Achieve proper alignment,
          reduce pain, and strengthen your logistics with ease!
        </p>
      </div>

      {/* 3-Card Carousel (No scroll) */}
      <div className="flex justify-center items-center gap-6 relative">
        {/* Left card */}
        <div
          className="w-[300px] transform scale-90 opacity-40 transition-all duration-300"
          data-aos="flip-left"
        >
          <ReviewCard review={reviews[getIndex(-1)]} />
        </div>

        {/* Center card */}
        <div
          className="w-[340px] transform scale-100 opacity-100 z-10 transition-all duration-300"
          data-aos="flip-left"
        >
          <ReviewCard review={reviews[getIndex(0)]} />
        </div>

        {/* Right card */}
        <div
          className="w-[300px] transform scale-90 opacity-40 transition-all duration-300"
          data-aos="flip-left"
        >
          <ReviewCard review={reviews[getIndex(1)]} />
        </div>
      </div>

      {/* Arrows + Dots */}
      <div className="mt-8 flex justify-center items-center gap-6">
        <button onClick={prev} className="btn btn-sm btn-outline text-primary rounded-full">
          <FaArrowLeft />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-primary scale-125" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
        <button onClick={next} className="btn btn-sm btn-outline text-primary rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => (
  <div className="rounded-xl p-6 shadow-lg bg-base-200 text-center">
    <FaQuoteLeft className="text-3xl text-primary mb-4 mx-auto" />
    <p className="text-sm text-gray-700 mb-4">{review.text}</p>
    <div className="border-b border-dashed border-gray-400 w-20 mx-auto mb-4"></div>
    <div className="flex flex-col items-center">
      <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mb-2" />
      <h4 className="font-semibold">{review.name}</h4>
      <span className="text-xs text-gray-500">{review.position}</span>
    </div>
  </div>
);

export default Review;


