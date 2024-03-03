import './plantrip.css';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import data from '../assets/constants/tripData';
import Navbar from '../components/Navbar';
import TourCards from '../components/TourCard';

const PlanTrip = () => {
    const [selectedLocationTours, setSelectedLocationTours] = useState([]);

    const handleLocationChange = (event) => {
        const selectedLocationName = event.target.value;
        const locationData = data.find(
            (location) => location.locationName === selectedLocationName,
        );
        setSelectedLocationTours(locationData ? locationData.tours : []);
        // eslint-disable-next-line no-console
        console.log(selectedLocationTours);
    };

    return (
        <>
            <div className="bg-[#00131D] font-Manrope">
                <Navbar />
                <div className="mt-32 flex flex-col  items-center justify-center px-40">
                    <div className="text-5xl text-white">Find</div>

                    <form className="mt-8 flex items-center gap-10 text-white">
                        <select
                            aria-label="Select your dream destination"
                            className="bg-transparent text-xl"
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
                        <button type="submit">
                            <SearchIcon style={{ color: '#009ECA' }} />
                        </button>
                    </form>
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
