import './plantrip.css';

import { useState } from 'react';
import data from 'src/assets/constants/tripData';
import Navbar from 'src/components/Navbar';
import TourCards from 'src/components/TourCard';

const PlanTrip = () => {
    const [selectedLocationTours, setSelectedLocationTours] = useState([]);

    const handleLocationChange = (event) => {
        const selectedLocationName = event.target.value;
        const locationData = data.find(
            (location) => location.locationName === selectedLocationName,
        );
        setSelectedLocationTours(locationData ? locationData.tours : []);
    };

    return (
        <>
            <div className="bg-[#00131D] font-Manrope">
                <Navbar />

                <div className="my-26 flex flex-col  items-center justify-center px-40 py-10">
                    <div className="text-5xl text-white">Find</div>
                    <select
                        aria-label="Select your dream destination"
                        className="mt-8 flex items-center gap-10 bg-transparent px-2 py-4 text-xl text-white"
                        onChange={handleLocationChange}
                    >
                        {data.map((country) => {
                            return (
                                <option
                                    key={country.locationName}
                                    value={country.locationName}
                                >
                                    {country.locationName}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="bg-[#E3F0FF]"></div>
            </div>

            {selectedLocationTours.length > 0 && (
                <TourCards tours={selectedLocationTours} />
            )}
        </>
    );
};

export default PlanTrip;
