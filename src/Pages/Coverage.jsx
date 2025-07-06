
// import React from "react";
// import OurMap from "../Component/OurMap";

// const Coverage = () => {
//   return (
//     <div className="p-8 min-h-screen bg-gray-100">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">
//           We are available in 64 districts
//         </h1>

//         <div className="mb-6 flex justify-center items-center gap-3">
//           <input
//             type="text"
//             placeholder="Search district"
//             className="border px-4 py-2 rounded-md w-64 shadow cursor-not-allowed bg-gray-200"
//             disabled
//           />
//           <button
//             className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed"
//             disabled
//           >
//             Search
//           </button>
//         </div>

//         <OurMap />
//       </div>
//     </div>
//   );
// };

// export default Coverage;

// src/pages/Coverage.jsx
import React, { useState } from "react";
import OurMap from "../Component/OurMap";

const Coverage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedDistrict, setSearchedDistrict] = useState("");

  const handleSearch = () => {
    if (searchText.trim()) {
      setSearchedDistrict(searchText.trim());
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          We are available in 64 districts
        </h1>

        <div className="mb-6 flex justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Search district"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border px-4 py-2 rounded-md w-64 shadow"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        <OurMap searchedDistrict={searchedDistrict} />
      </div>
    </div>
  );
};

export default Coverage;
