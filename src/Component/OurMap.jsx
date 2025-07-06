
// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import warehouseData from "../assets/warehouses.json";

// // Simple custom icon
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// const OurMap = () => {
//   return (
//     <MapContainer center={[23.7, 90.4]} zoom={7} style={{ height: "600px", width: "100%" }}>
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {warehouseData.map((item, index) => (
//         <Marker
//           key={index}
//           position={[item.latitude, item.longitude]}
//           icon={customIcon}
//         >
//           <Popup>{item.district}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default OurMap;

// src/components/OurMap.jsx
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import warehouseData from "../assets/warehouses.json";

// Custom Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

// ✅ Component to fly to searched district
const FlyToDistrict = ({ districtName }) => {
  const map = useMap();

  useEffect(() => {
    if (districtName) {
      const match = warehouseData.find(
        (d) => d.district.toLowerCase() === districtName.toLowerCase()
      );
      if (match) {
        map.flyTo([match.latitude, match.longitude], 10, {
          duration: 1.5,
        });
      }
    }
  }, [districtName, map]);

  return null;
};

const OurMap = ({ searchedDistrict }) => {
  return (
    <MapContainer center={[23.7, 90.4]} zoom={7} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Animate map when search changes */}
      <FlyToDistrict districtName={searchedDistrict} />

      {warehouseData.map((item, index) => (
        <Marker
          key={index}
          position={[item.latitude, item.longitude]}
          icon={customIcon}
        >
          <Popup>{item.district}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default OurMap;
