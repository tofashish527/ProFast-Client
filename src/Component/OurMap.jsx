

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const position = [23.6850, 90.3563]; // Center of Bangladesh

// Optional custom icon (can skip for default)
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Helper component to move map
function FlyToDistrict({ coords }) {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 14, { duration: 1.5 });
    }
    return null;
}

const OurMap = ({ serviceCenters }) => {
    const [searchText, setSearchText] = useState('');
    const [activeCoords, setActiveCoords] = useState(null);
    const [activeDistrict, setActiveDistrict] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const district = serviceCenters.find(d =>
            d.district.toLowerCase().includes(searchText.toLowerCase())
        );
        if (district) {
            setActiveCoords([district.latitude, district.longitude]);
            setActiveDistrict(district.district);
        }
    };

    return (
        <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg relative">

            <form
                onSubmit={handleSearch}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex bg-gray-400"
            >
                <input
                    type="text"
                    placeholder="Search district..."
                    className="flex-1 px-4 py-2 border rounded-l-md outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                    Go
                </button>
            </form>


            {/* map container */}
            <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="h-full w-full z-0">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToDistrict coords={activeCoords} />

                {
                    serviceCenters.map((center, index) => <Marker
                        key={index}
                        position={[center.latitude, center.longitude]}
                        icon={customIcon}>
                        <Popup autoOpen={center.district === activeDistrict}>
                            <strong>{center.district}</strong><br />
                            {center.covered_area.join(', ')}
                        </Popup>
                    </Marker>)
                }
            </MapContainer>
        </div>
    );
};

export default OurMap;

// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import warehouseData from "../assets/warehouses.json";

// // Custom Icon
// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [25, 25],
//   iconAnchor: [12, 25],
//   popupAnchor: [0, -25],
// });

// // Component to fly to searched district
// const FlyToDistrict = ({ districtName }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (districtName) {
//       const match = warehouseData.find(
//         (d) => d.district.toLowerCase() === districtName.toLowerCase()
//       );
//       if (match) {
//         map.flyTo([match.latitude, match.longitude], 10, {
//           duration: 1.5,
//         });
//       }
//     }
//   }, [districtName, map]);

//   return null;
// };

// const OurMap = ({ searchedDistrict }) => {
//   return (
//     <MapContainer center={[23.7, 90.4]} zoom={7} style={{ height: "600px", width: "100%" }}>
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       {/* Animate map when search changes */}
//       <FlyToDistrict districtName={searchedDistrict} />

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
